#!/usr/bin/env node
import * as readline from 'readline';

class SpellingBeeGame {
  private letters: string[] = [];
  private centralLetter: string = '';

  setLetters(input: string): void {
    // Remove spaces and convert to uppercase
    const cleanInput = input.replace(/\s/g, '').toUpperCase();
    
    if (cleanInput.length !== 7) {
      console.log('Please provide exactly 7 letters.');
      return;
    }

    // First letter is the central letter
    this.centralLetter = cleanInput[0];
    this.letters = cleanInput.split('');
    
    console.log(`Letters set! Central letter: ${this.centralLetter}`);
    console.log(`All letters: ${this.letters.join(', ')}`);
  }

  showStatus(): void {
    if (this.letters.length === 0) {
      console.log('No letters set yet. Use "letters <7-letters>" to start.');
      return;
    }

    console.log('\n=== Game Status ===');
    console.log(`Central letter: ${this.centralLetter}`);
    console.log(`All letters: ${this.letters.join(', ')}`);
    console.log('==================\n');
  }
}

class CLI {
  private game: SpellingBeeGame;
  private rl: readline.Interface;

  constructor() {
    this.game = new SpellingBeeGame();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start(): void {
    console.log('Welcome to Spelling Bee!');
    console.log('Commands:');
    console.log('  letters <7-letters> - Set the game letters (first letter is central)');
    console.log('  status              - Show current game status');
    console.log('  quit                - Exit the game');
    console.log('');

    this.promptUser();
  }

  private promptUser(): void {
    this.rl.question('> ', (input) => {
      this.handleCommand(input.trim());
    });
  }

  private handleCommand(input: string): void {
    const parts = input.split(' ');
    const command = parts[0].toLowerCase();

    switch (command) {
      case 'letters':
        if (parts.length < 2) {
          console.log('Usage: letters <7-letters>');
        } else {
          this.game.setLetters(parts.slice(1).join(''));
        }
        break;

      case 'status':
        this.game.showStatus();
        break;

      case 'quit':
      case 'exit':
        console.log('Thanks for playing!');
        this.rl.close();
        return;

      case 'help':
        console.log('Commands:');
        console.log('  letters <7-letters> - Set the game letters (first letter is central)');
        console.log('  status              - Show current game status');
        console.log('  quit                - Exit the game');
        break;

      default:
        console.log(`Unknown command: ${command}. Type "help" for available commands.`);
        break;
    }

    // Continue the event loop
    this.promptUser();
  }
}

// Start the game
const cli = new CLI();
cli.start();
