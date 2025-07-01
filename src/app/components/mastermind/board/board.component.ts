import { Component, OnInit } from '@angular/core';
import { Board, Guess, Combination } from '../board';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DebounceClickDirective } from '../../../shared/directives/debounce-click.directive';
import { Util } from '../../../shared/services/util';
import { FillPipe } from '../../../shared/pipes/fill.pipe';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule,MatGridListModule, DebounceClickDirective, FillPipe]
})
export class BoardComponent implements OnInit {

  /**
   * the initial board
   */
  board: Board = {
    maxTries: 7,
    fields: 4,
    colors: 6,
    guesses: [],
    secretCombination: {
      items: []
    }
  };

  combination: Combination = {
    items: []
  }

  gameWon: boolean = false
  gameLost: boolean = false

  // added variables
  correct: number[] = []; // copy of secret comb
  letters: number[] = []; // the current guess
  tally1: number[] = []; // 
  tally2: number[] = [];
  removeIndex: number[] = []
  match = 0;
  count = 0;


  constructor(public util: Util) { }

  ngOnInit(): void {
    console.log("board view created")
    this.board.secretCombination = this.createSecretCombination()
    for (let i = 0; i < this.board.fields; i++) {
      this.combination.items[i] = 1
    }
  }
  newGame(): void {
    console.log("board view created")
    this.board.secretCombination = this.createSecretCombination()
    for (let i = 0; i < this.board.fields; i++) {
      this.combination.items[i] = 1 // start with 1111
    }
    this.board.maxTries = 7;
    this.board.fields = 4;
    this.board.colors = 6;
    this.board.guesses = [];
    this.gameWon = false;
    this.gameLost = false;
  }
  onGuess(): void {
    console.log("guessed ie this combination", this.combination)

    var newGuess: Guess = this.evaluateGuess(this.combination)
    var guessNo = (1 + this.board.guesses.length).toString();

    if (newGuess.correct == this.board.fields) {
      this.gameWon = true;
      /* 
      console.log("won in " + guessNo); // send to textfile OMIT if online
      this.http.sendData("MM", `won in ${guessNo}`)
        .subscribe((response) => {
          console.log(response)
        }); */
    }
    this.board.guesses.push(newGuess)
    if (!this.gameWon && this.board.guesses.length == this.board.maxTries) {
      this.gameLost = true;
      /* this.http.sendData("MM", "lost ")
        .subscribe((response) => {
          console.log(response)
        }); */
    }
  }

  evaluateGuess(combination: Combination): Guess {
    console.log("secret: ", this.board.secretCombination)
    /* create a copy of the combination */
    var guessCombination: Combination = {
      items: []
    }
    this.match = 0;
    this.count = 0; // 
    this.letters = [];
    for (let i = 0; i < this.board.fields; i++) {
      guessCombination.items[i] = combination.items[i];
      this.letters[i] = guessCombination.items[i]; // copy guess to temp letters array
      this.correct[i] = this.board.secretCombination.items[i]; // copy secret to correct array
    }

    this.removeIndex = []; // array of numbers with index of correct matches
    this.letters.forEach((letter, index) => { // create index of exact matches
      if (letter == this.correct[index]) {
        this.removeIndex.push(index)
        this.count++ // holds number of black pegs
      }

    })
    //    console.log("REMOVE INDEX", this.removeIndex)

    // remove correct matches from arrays
    this.removeArrayValues(this.letters, this.removeIndex);
    this.removeArrayValues(this.correct, this.removeIndex);
    //
    console.log("after processing phase 1...black pegs = ", this.count)

    this.tally1 = [];
    this.tally2 = [];
    for (var i = 1; i < 1 + this.board.colors; i++) {
      var count = 0, count2 = 0;
      for (var j = 0; j < this.correct.length; j++) {
        if (i == this.correct[j]) {
          count++;
        }
        if (i == this.letters[j]) {
          count2++;
        }
      }

      this.tally1.push(count)
      this.tally2.push(count2)
    } // end of outer loop

    //  console.log("tallies - correct / guess ", this.tally1, this.tally2)

    for (var i = 0; i < 6; i++) {
      if (this.tally1[i] && this.tally2[i]) { // if both contain non zero
        this.match++; // add 1 to match count
        console.log(this.tally1[i], this.tally2[i], i)
      }
      if (this.tally1[i] > 1 && this.tally2[i] > 1) { // if both are 2
        this.match++; // there are 2 matches so add 1 more to match count
      }
    }


    //    console.log("after processing phase 2... " + this.match + " match(es) found");
    //  console.log("so the result is ... " + this.count + " " + this.match)


    var newGuess: Guess = {
      combination: guessCombination,
      correct: this.count,
      correctColors: this.match
    }
    console.log("Guess:", newGuess)
    return newGuess
  }

  /**
   * Creates a random combination.
   */
  createSecretCombination(): Combination {

    var result: Combination = {
      items: []
    }
    for (let i = 0; i < this.board.fields; i++) {
      result.items.push(this.randomNumber(this.board.colors))
    }
    return result
  }

  /**
   * Creates a random number between 1 (inclusive) and maxValue (inclusive).
   */
  randomNumber(maxValue: number): number {

    return Math.floor(Math.random() * maxValue) + 1
  }


  // utility for removal of correct positioned guesses from arrays
  removeArrayValues<T>(arr: Array<T>, valArray: Array<number>): T[] {
    valArray = valArray.sort();
    for (var i = valArray.length - 1; i >= 0; i--)
      arr.splice(valArray[i], 1);

    return arr;
  }
  getStyle(myNum: string) {
    if (myNum == '1') {
      return 'background:rgb(255,0,0);color: rgb(255,0,0)';
    }
     if (myNum == '2') {
      return 'background:rgb(255,255,0);color: rgb(255,255,0)';
    }
     if (myNum == '3') {
      return 'background:rgb(0, 0, 255);color: rgb(0,0,255)';
    }
     if (myNum == '4') {
      return 'background:rgb(0,255,0);color: rgb(0,255,0)';
    }
     if (myNum == '5') {
      return 'background:rgb(132, 34, 197);color: rgb(132, 34, 197)';
    }
     if (myNum == '6') {
      return 'background:rgb(112, 233, 233); color: rgb(112, 233, 233)';
    }
    else  return 'background:rgb(60, 25, 189);color: rgb(0,0,0)';

  }

}

