FROM node:22-bookworm-slim AS build
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci
COPY . .
RUN DATABASE_URL=postgresql://build:build@localhost:5432/build BETTER_AUTH_URL=https://www.mivanfood.com BETTER_AUTH_SECRET=build-only-placeholder-not-used-at-runtime npm run build
RUN chown -R node:node /app/.next
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
USER node
EXPOSE 3000
CMD ["npm", "run", "start"]
