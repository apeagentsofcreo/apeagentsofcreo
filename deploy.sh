#!/usr/bin/env bash

set -Eeuo pipefail

readonly APP_DIR="/var/www/apeagentsofcreo.com"
readonly PM2_PROCESS="nextjs"
readonly DEPLOY_BRANCH="main"
readonly LOCK_FILE="/tmp/apeagentsofcreo-deploy.lock"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

fail() {
  log "ERROR: $*"
  exit 1
}

command -v git >/dev/null 2>&1 || fail "git is not installed"
command -v npm >/dev/null 2>&1 || fail "npm is not installed"
command -v npx >/dev/null 2>&1 || fail "npx is not installed"
command -v pm2 >/dev/null 2>&1 || fail "pm2 is not installed"
command -v flock >/dev/null 2>&1 || fail "flock is not installed"

exec 9>"${LOCK_FILE}"
flock -n 9 || fail "another deployment is already running"

[[ -d "${APP_DIR}/.git" ]] || fail "${APP_DIR} is not a Git checkout"
cd "${APP_DIR}"

[[ -z "$(git status --porcelain)" ]] || fail "working tree has uncommitted changes"

log "Fetching origin/${DEPLOY_BRANCH}"
git fetch origin "${DEPLOY_BRANCH}"

local_commit="$(git rev-parse HEAD)"
remote_commit="$(git rev-parse "origin/${DEPLOY_BRANCH}")"

if [[ "${local_commit}" == "${remote_commit}" ]]; then
  log "Source is already up to date at ${local_commit:0:7}"
else
  log "Updating ${local_commit:0:7} to ${remote_commit:0:7}"
  git merge --ff-only "origin/${DEPLOY_BRANCH}"
fi

log "Installing locked dependencies"
npm ci

log "Building Next.js application"
npx next build

pm2 describe "${PM2_PROCESS}" >/dev/null 2>&1 || fail "PM2 process '${PM2_PROCESS}' does not exist"

log "Restarting PM2 process ${PM2_PROCESS}"
pm2 restart "${PM2_PROCESS}" --update-env
pm2 save

log "Deployment complete at $(git rev-parse --short HEAD)"
