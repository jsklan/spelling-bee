# Spelling Bee

A simple clone of the New York Times Spelling Bee game built with TypeScript. This project starts as a command-line application and is designed as a learning project for TypeScript development.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (preferred package manager)

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd spelling-bee
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build the project:
   ```bash
   pnpm run build
   ```

4. Run the game:
   ```bash
   pnpm run start
   ```

   Or for development (builds and runs in one command):
   ```bash
   pnpm run dev
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
- `pnpm run build` - Compile TypeScript to JavaScript
- `pnpm run start` - Run the compiled game
- `pnpm run dev` - Build and run in one command
- `pnpm run clean` - Remove compiled files

### Project Structure
```
src/
├── main.ts          # Main CLI application
dist/                # Compiled JavaScript (generated)
package.json         # Project configuration
tsconfig.json        # TypeScript configuration
```

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
