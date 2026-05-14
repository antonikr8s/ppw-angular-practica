import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsPage {
  readonly students = signal([
    {id:1, name:"Carlos Antonio"},
    {id:2, name:"Marco Esteban"},
    {id:3, name:"Mateo Santiago"},
    {id:4, name:"John Ismael"},
    {id:5, name:"Nelly Dixiana"}
]);

}
