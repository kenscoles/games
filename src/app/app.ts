import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink , Router} from '@angular/router';
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
export class App implements OnInit {
  state = inject(State)
  router = inject(Router)
  protected title = 'games';

ngOnInit() {
    this.router.navigate([''])
  }

}

//ng deploy --base-href=/games/
