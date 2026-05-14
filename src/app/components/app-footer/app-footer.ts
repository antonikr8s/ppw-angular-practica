import {
  UpperCasePipe,
  LowerCasePipe,
  DatePipe,
  CurrencyPipe,
  PercentPipe
} from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './app-footer.html', 
  styleUrl: './app-footer.css',     
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class Footer {

  readonly title = signal('Footer Angular');
  readonly message = signal('Este es mi Footer');
  readonly today = signal(new Date());
  readonly price = signal(200);
  readonly percent = signal(0.75);

}