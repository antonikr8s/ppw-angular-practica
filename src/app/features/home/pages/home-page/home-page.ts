import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../../../components/app-hero/app-hero';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Hero],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private router = inject(Router);

  goToStudentsPage(): void {
    this.router.navigate(['/students']);
  }
}