import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './students-page.html',
  styleUrl: './students-page.css',
})
export class StudentsPage {
  readonly students = signal([
    { id: 1, name: 'Marco Esteban' },
    { id: 2, name: 'Carlos Antonio' },
    { id: 3, name: 'Nelly Dixiana' },
    { id: 4, name: 'Diana Patricia' },
    { id: 5, name: 'John Ismael' },
  ]);
}