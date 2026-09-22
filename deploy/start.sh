#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
command -v docker >/dev/null
docker compose version >/dev/null
if [ ! -f .env.production ]; then
  umask 077
  printf 'POSTGRES_PASSWORD=%s\nBETTER_AUTH_SECRET=%s\n' "$(openssl rand -hex 32)" "$(openssl rand -hex 48)" > .env.production
fi
# Reuse this file on future releases. Never replace existing database credentials.
docker compose --env-file .env.production build migrate
docker compose --env-file .env.production up -d --wait
docker compose --env-file .env.production ps
curl --fail --retry 12 --retry-delay 5 --retry-all-errors https://www.mivanfood.com/login -o /dev/null
