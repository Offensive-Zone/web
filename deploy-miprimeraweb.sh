#!/bin/bash
# Deploy Mi Primera Web to Cloudflare Pages
# Usage: ./deploy-miprimeraweb.sh [api-token]

set -e

PROJECT_NAME="miprimeraweb"
SOURCE_DIR="redesign/Rediseño sitio Offensive Zone"

if [ -z "$1" ]; then
  echo "Usage: $0 <CLOUDFLARE_API_TOKEN>"
  echo ""
  echo "This script deploys the Mi Primera Web site to Cloudflare Pages."
  echo "The site is a static HTML site located in: $SOURCE_DIR"
  echo ""
  echo "Make sure you have:"
  echo "1. A Cloudflare account with Pages enabled"
  echo "2. An API token with Pages:Edit permission"
  echo "3. Docker installed (for running wrangler)"
  exit 1
fi

CLOUDFLARE_API_TOKEN=$1

echo "Deploying Mi Primera Web to Cloudflare Pages..."
echo "Source: $SOURCE_DIR"
echo "Project: $PROJECT_NAME"
echo ""

# Deploy using Docker and Wrangler
docker run --rm -v "$(pwd):/app" -w /app \
  -e CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" \
  node:20-alpine sh -c "npm install -g wrangler && wrangler pages deploy '$SOURCE_DIR' --project-name=$PROJECT_NAME"

echo ""
echo "Deployment complete!"
echo "Your site should be available at: https://$PROJECT_NAME.pages.dev"
echo ""
echo "Note: You may need to configure a custom domain in the Cloudflare Dashboard"
echo "to use miprimeraweb.offensive-zone.com instead of the .pages.dev domain."
