# Spelling Bee

A monorepo containing multiple packages for the Spelling Bee game built with TypeScript. This project includes both command-line and web interfaces, designed as a learning project for TypeScript development.

## Packages

- **[@jsklan/spelling-bee-cli](./packages/cli)** - Command-line interface for the game
- **[@jsklan/spelling-bee-web](./packages/web)** - Web interface (coming soon)

## Quick Start

### Using the Published CLI Package

```bash
npm install -g @jsklan/spelling-bee-cli
spelling-bee
```

### Development Setup

#### Prerequisites
- Node.js (version 18 or higher)
- pnpm (preferred package manager)

#### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd spelling-bee
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build all packages:
   ```bash
   pnpm build
   ```

4. Run the CLI in development mode:
   ```bash
   pnpm dev:cli
   ```

## How to Play

The game currently supports these basic commands:

- `letters <7-letters>` - Set the game letters (the first letter becomes the central letter)
- `status` - Show the current game status
- `quit` - Exit the game
- `help` - Show available commands

### Example Session
```
> letters PANTERS
Letters set! Central letter: P
All letters: P, A, N, T, E, R, S

> status

=== Game Status ===
Central letter: P
All letters: P, A, N, T, E, R, S
==================

> quit
Thanks for playing!
```

## Development

### Available Scripts
- `pnpm build` - Build all packages
- `pnpm dev:cli` - Run CLI in development mode
- `pnpm dev:web` - Run web app in development mode (when implemented)
- `pnpm clean` - Clean all build artifacts
- `pnpm test` - Run tests for all packages

### Monorepo Structure
```
packages/
├── cli/             # Command-line interface package
│   ├── src/
│   │   └── main.ts  # CLI application
│   ├── dist/        # Compiled JavaScript
│   └── package.json
└── web/             # Web interface package (placeholder)
    ├── src/
    └── package.json
```

## Publishing

This project uses automated publishing via GitHub Actions. To release a new version:

1. Create and push a version tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

2. The GitHub workflow will automatically:
   - Build all packages
   - Run tests
   - Update package versions
   - Publish to npm

### NPM Setup Required

Before the first publish, you'll need to:
1. Create an npm account
2. Create an organization called `jsklan`
3. Generate an npm token with publish permissions
4. Add the token as `NPM_TOKEN` in your GitHub repository secrets

## Roadmap

This is a learning project with plans to expand functionality:

- [ ] Word validation against a dictionary
- [ ] Scoring system
- [ ] Game rules enforcement (words must contain central letter, minimum length, etc.)
- [ ] Web interface
- [ ] Database integration for saving game sessions
- [ ] Deployment to a hosting service

## Contributing

This is a learning project. Feel free to experiment and add new features!
