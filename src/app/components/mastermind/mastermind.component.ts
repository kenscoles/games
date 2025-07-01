import { Component } from '@angular/core';

import { Board } from './board';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css'],
  standalone : true,
  imports: [BoardComponent]
})
export class MastermindComponent {
  title = 'mastermind';
}
