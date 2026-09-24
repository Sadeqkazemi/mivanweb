import "server-only";

type OtpEmail = {
  to: string;
  otp: string;
  type: "sign-in" | "email-verification" | "forget-password" | "change-email";
};

const subjects: Record<OtpEmail["type"], string> = {
  "email-verification": "Verify your Mivan email",
  "sign-in": "Your Mivan sign-in code",
  "forget-password": "Reset your Mivan password",
  "change-email": "Confirm your Mivan email change",
};

export async function sendOtpEmail({ to, otp, type }: OtpEmail) {
  if (process.env.AUTH_EMAIL_TEST_MODE === "true") return;

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error("Email delivery is not configured.");

  const from = process.env.AUTH_EMAIL_FROM?.trim() || "Mivan <info@mivanfood.com>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: subjects[type],
      text: `Your Mivan verification code is ${otp}. It expires in 10 minutes. If you did not request this code, you can ignore this email.`,
      html: otpEmailHtml(otp, type),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error("OTP email delivery failed", {
      status: response.status,
      requestId: response.headers.get("x-request-id"),
    });
    throw new Error("Could not send the verification email.");
  }
}

function otpEmailHtml(otp: string, type: OtpEmail["type"]) {
  const signIn = type === "sign-in";
  const heading = signIn ? "Confirm your secure sign-in" : "Confirm your email";
  const intro = signIn
    ? "Enter this one-time code on the Mivan admin sign-in page."
    : "Enter this one-time code on the Mivan verification page.";
  return `<!doctype html><html><body style="margin:0;background:#fdf3e7;font-family:Arial,sans-serif;color:#1d160f"><div style="max-width:560px;margin:0 auto;padding:44px 20px"><div style="background:#fff;border:1px solid #eadfd3;border-radius:28px;overflow:hidden"><div style="padding:28px 32px;background:linear-gradient(150deg,#ff9f2b 0%,#f2530f 62%,#e03a05 100%);color:#fff"><div style="font-size:24px;font-weight:800">mivan</div><div style="margin-top:8px;font-size:13px;opacity:.9">SECURE VERIFICATION</div></div><div style="padding:36px 32px"><h1 style="margin:0;font-size:24px">${heading}</h1><p style="margin:14px 0 24px;line-height:1.6;color:#564c40">${intro} The code expires in 10 minutes.</p><div style="padding:18px;border-radius:18px;background:#fff5e6;text-align:center;font-size:34px;font-weight:800;letter-spacing:10px;color:#e0450a">${otp}</div><p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#8d8478">If you did not request this code, you can safely ignore this email. Never share this code with anyone.</p></div></div></div></body></html>`;
}
