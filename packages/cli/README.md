# @jsklan/spelling-bee-cli

Command-line interface for the Spelling Bee game.

## Installation

```bash
npm install -g @jsklan/spelling-bee-cli
```

Or run directly with npx:

```bash
npx @jsklan/spelling-bee-cli
```

## Usage

After installation, you can start the game by running:

```bash
spelling-bee
```

## Commands

- `letters <7-letters>` - Set the game letters (the first letter becomes the central letter)
- `status` - Show the current game status
- `quit` - Exit the game
- `help` - Show available commands

## Example Session

```
Welcome to Spelling Bee!
Commands:
  letters <7-letters> - Set the game letters (first letter is central)
  status              - Show current game status
  quit                - Exit the game

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

This package is part of the [@jsklan/spelling-bee](https://github.com/jsklan/spelling-bee) monorepo.

## License

MIT
