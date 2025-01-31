#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run linting
echo "Running linter..."
npm run lint

# Build the application
echo "Building the application..."
npm run build

# Success message
echo "Build completed successfully!"

