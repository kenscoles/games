import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { State } from './shared/services/state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,  MatButtonModule, MatToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  state = inject(State)
  protected title = 'games';
}

//ng deploy --base-href=/games/
