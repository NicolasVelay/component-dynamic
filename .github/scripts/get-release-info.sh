#!/usr/bin/env bash
set -euo pipefail

#
# Determines the version bump type and extracts release notes
# from the merged PR.
#
# Outputs (via $GITHUB_OUTPUT):
#   bump: premajor | preminor | prepatch | prerelease | skip
#
# Side effect:
#   Writes release notes to /tmp/release_notes.md
#

if [ "${GITHUB_EVENT_NAME:-}" = "workflow_dispatch" ]; then
  echo "bump=prerelease" >> "$GITHUB_OUTPUT"
  echo "Manual release" > /tmp/release_notes.md
  exit 0
fi

COMMIT_MSG=$(git log -1 --pretty=%s)
PR_NUMBER=$(echo "$COMMIT_MSG" | grep -oE '#[0-9]+' | head -1 | tr -d '#' || true)

if [ -z "$PR_NUMBER" ]; then
  echo "bump=skip" >> "$GITHUB_OUTPUT"
  exit 0
fi

PR_TITLE=$(gh pr view "$PR_NUMBER" --json title --jq '.title')
PR_BODY=$(gh pr view "$PR_NUMBER" --json body --jq '.body // ""')
PR_LABELS=$(gh pr view "$PR_NUMBER" --json labels --jq '[.labels[].name] | join(",")')

# Determine bump type
BUMP="skip"

if echo "$PR_LABELS" | grep -qi "breaking" || echo "$PR_TITLE" | grep -qE '^(breaking|[a-z]+(\([^)]*\))?!):'; then
  BUMP="premajor"
elif echo "$PR_TITLE" | grep -qE '^feat(\([^)]*\))?:'; then
  BUMP="preminor"
elif echo "$PR_TITLE" | grep -qE '^fix(\([^)]*\))?:'; then
  BUMP="prepatch"
fi

echo "bump=$BUMP" >> "$GITHUB_OUTPUT"

if [ "$BUMP" = "skip" ]; then
  exit 0
fi

# Extract content between "## Release notes" and the next "## " heading
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

if [ -z "$RELEASE_NOTES" ]; then
  RELEASE_NOTES="$PR_TITLE"
fi

{
  echo "$RELEASE_NOTES"
  echo ""
  echo "---"
  echo "PR: #${PR_NUMBER}"
} > /tmp/release_notes.md
