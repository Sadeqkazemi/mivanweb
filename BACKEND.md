# Mivan backend

Next.js App Router + React, PostgreSQL, Prisma 6.19.3 and Better Auth. Node 22.15+ is supported. Prisma is pinned to the compatible stable 6.x release, not the incompatible 8.x prerelease. A patched deepmerge-ts override is used by Prisma's configuration tooling.

## Local setup

1. `npm ci` (stop the Next.js process first on Windows, because Prisma's engine DLL may be locked).
2. Copy `.env.example` to `.env`. Choose a local database password and generate a random secret with `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`.
3. `npm run db:dev` in one terminal. This starts persistent PostgreSQL on loopback only, using the ignored `data/postgres` directory. Keep it running. Ctrl+C stops it without removing data. It is a development helper, not a production database service.
4. `npm run db:migrate` in another terminal.
5. `npm run dev`, then open the exact origin in BETTER_AUTH_URL (default http://127.0.0.1:3000).
6. Register through `/login`. Passwords require at least 12 characters. No seeded user or administrator password exists.

For an existing, deliberately selected staff account, a database operator can run `npm run db:admin -- email@example.com`. Only use this for authorized staff. The signup API never accepts a role. Admin pages remain explicitly labelled previews; their sample charts and local CRUD are not live administration services.

## Implemented

- Email/password registration, sign-in, database sessions, session expiration and real logout.
- Persistent profile and dietary/notification preferences using a transaction.
- Session-owned GET/PATCH `/api/profile`, strict input validation, origin validation and no-store responses.
- Server-protected customer routes and role-protected admin route group.
- Database-backed credential rate limiting through Better Auth. Deploy behind a trusted reverse proxy that replaces client IP headers; do not expose a bypass path to the origin.
- New users see empty health, recommendation and reward states instead of sample personal information.

## Checks

`npm run test:integration` requires the local database and app running at BETTER_AUTH_URL. It creates synthetic users, checks authentication/ownership/invalid input/CSRF/session expiry/logout and removes those users. It refuses non-loopback app/database hosts. Run against a dedicated development database, never production.

`npm run lint` and `npm run build` verify static checks. `.env`, database files and npm scratch files are excluded from Git. Committed migrations can be applied using `npm run db:migrate`.

## Before deployment

Provide a managed PostgreSQL DATABASE_URL with TLS, a unique BETTER_AUTH_SECRET, and the HTTPS canonical BETTER_AUTH_URL. Apply migrations during deployment before serving traffic; never use migrate dev on production. Configure backups and test restores, restrict database access, and keep secrets in the host's secret manager. Account/profile responses must not be cached by a CDN. Do not deploy the embedded database helper.

Email verification/recovery, Google sign-in, staff MFA, wearable data/consent, recommendation/scan services, billing, reward ledgers, and persistent admin management are not implemented in this first backend slice. UI messaging does not claim these work. Reconcile published privacy/security statements with actual deployment controls before launch. Admin access currently uses the same password session with a server role check; staff MFA is a remaining launch requirement.
