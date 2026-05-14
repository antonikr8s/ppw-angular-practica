import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from "../../../../components/app-hero/app-hero";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [Hero],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  //contructor de la clase
  constructor(private router: Router ){

  }
  goToStudentsPage(){
    this.router.navigate(['/students'])
  }
}
