#!/usr/bin/env bash
set -euo pipefail

#
# Calculates the next alpha pre-release version based on existing tags.
#
# Usage: get-prerelease-version.sh <patch|minor|major>
#
# Outputs (via $GITHUB_OUTPUT):
#   version: e.g. 1.1.0-alpha.0
#

BUMP_TYPE="${1:?Usage: $0 <patch|minor|major>}"

git fetch --tags --force

# Ignore alpha tags to get the latest release baseline
LATEST_TAG=$(git tag --list 'v*' --sort=-version:refname | grep -v 'alpha' | head -1)
if [ -z "$LATEST_TAG" ]; then
  LATEST_TAG="v0.0.0"
fi

VERSION="${LATEST_TAG#v}"
BASE_VERSION=$(echo "$VERSION" | grep -oE '^[0-9]+\.[0-9]+\.[0-9]+')
IFS='.' read -r MAJOR MINOR PATCH <<< "$BASE_VERSION"

case "$BUMP_TYPE" in
  major) TARGET_BASE="$((MAJOR+1)).0.0" ;;
  minor) TARGET_BASE="$MAJOR.$((MINOR+1)).0" ;;
  patch) TARGET_BASE="$MAJOR.$MINOR.$((PATCH+1))" ;;
  *) echo "Invalid bump type: $BUMP_TYPE" >&2; exit 1 ;;
esac

# Increment alpha number if a previous alpha exists for this target
LATEST_ALPHA=$(git tag --list "v${TARGET_BASE}-alpha.*" --sort=-version:refname | head -1)
if [ -z "$LATEST_ALPHA" ]; then
  ALPHA_NUM=0
else
  ALPHA_NUM=$(echo "$LATEST_ALPHA" | sed 's/.*alpha\.//')
  ALPHA_NUM=$((ALPHA_NUM + 1))
fi

NEW_VERSION="${TARGET_BASE}-alpha.${ALPHA_NUM}"

echo "version=$NEW_VERSION" >> "$GITHUB_OUTPUT"
