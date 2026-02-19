#!/usr/bin/env bash
set -euo pipefail

#
# Validates PR title and release notes.
#
# Expects environment variables:
#   PR_TITLE  — the pull request title
#   PR_BODY   — the pull request body
#
# Exits with code 1 if validation fails.
#

ERRORS=()

# --- Validate PR title follows conventional commits ---

VALID_TYPES="fix|feat|chore|refactor|docs|ci|test|style|perf|breaking"

if ! echo "$PR_TITLE" | grep -qE "^($VALID_TYPES)(\([^)]+\))?\!?:"; then
  ERRORS+=("PR title must follow conventional commits: <type>(scope): description")
  ERRORS+=("  Valid types: fix, feat, chore, refactor, docs, ci, test, style, perf, breaking")
  ERRORS+=("  Examples: \"fix(Dropdown): Fix rendering\" or \"feat: Add new component\"")
fi

# --- Validate release notes for releasable changes ---

IS_RELEASABLE=false
if echo "$PR_TITLE" | grep -qE "^(fix|feat|breaking)(\([^)]+\))?\!?:"; then
  IS_RELEASABLE=true
fi

if [ "$IS_RELEASABLE" = true ]; then
  RELEASE_NOTES=$(echo "$PR_BODY" | awk '
    /^## [Rr]elease [Nn]otes/ { found=1; next }
    found && /^## / { exit }
    found { lines[++n] = $0 }
    END {
      start = 1
      while (start <= n && lines[start] ~ /^[[:space:]]*$/) start++
      end = n
      while (end >= start && lines[end] ~ /^[[:space:]]*$/) end--
      for (i = start; i <= end; i++) print lines[i]
    }
  ')

  # Strip HTML comments
  RELEASE_NOTES_CLEAN=$(echo "$RELEASE_NOTES" | sed 's/<!--.*-->//g' | tr -d '[:space:]')

  if [ -z "$RELEASE_NOTES_CLEAN" ]; then
    ERRORS+=("Release notes are required for fix/feat/breaking changes.")
    ERRORS+=("  Add a \"## Release notes\" section in the PR description with non-empty content.")
  fi
fi

# --- Report results ---

if [ ${#ERRORS[@]} -gt 0 ]; then
  echo "❌ PR validation failed:"
  echo ""
  for err in "${ERRORS[@]}"; do
    echo "  $err"
  done
  exit 1
fi

echo "✅ PR validation passed"
