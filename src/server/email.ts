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
      html: otpEmailHtml(otp),
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

function otpEmailHtml(otp: string) {
  return `<!doctype html><html><body style="margin:0;background:#f7f1e8;font-family:Arial,sans-serif;color:#191510"><div style="max-width:560px;margin:0 auto;padding:44px 20px"><div style="background:#fff;border:1px solid #eadfd3;border-radius:28px;overflow:hidden"><div style="padding:28px 32px;background:linear-gradient(135deg,#ef9a3f,#da572a);color:#fff"><div style="font-size:24px;font-weight:800">mivan</div><div style="margin-top:8px;font-size:13px;opacity:.9">EMAIL VERIFICATION</div></div><div style="padding:36px 32px"><h1 style="margin:0;font-size:24px">Confirm your email</h1><p style="margin:14px 0 24px;line-height:1.6;color:#675c51">Enter this one-time code on the Mivan sign-up page. The code expires in 10 minutes.</p><div style="padding:18px;border-radius:18px;background:#fbf3ea;text-align:center;font-size:34px;font-weight:800;letter-spacing:10px;color:#c94d25">${otp}</div><p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#8b8075">If you did not request this code, you can safely ignore this email. Never share this code with anyone.</p></div></div></div></body></html>`;
}
