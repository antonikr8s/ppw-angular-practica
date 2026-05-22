import {
  UpperCasePipe,
  DatePipe,
  CurrencyPipe,
  PercentPipe
} from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [], 
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {

  readonly title = signal('Footer Angular');
  readonly message = signal('Estudiante: Carlos Antonio Gordillo Tenemaza');
  readonly today = signal(new Date());
  readonly price = signal(200);
  readonly percent = signal(0.75);

}