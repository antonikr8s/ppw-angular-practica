import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-detail-page',
  imports: [RouterLink],
  templateUrl: './students-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsDetailPage {
  //ActivatedRoute nos permite leer los parametros de la ruta app.routs.ts
  private route=inject(ActivatedRoute);
  readonly id = this.route.snapshot.paramMap.get('id');

}
