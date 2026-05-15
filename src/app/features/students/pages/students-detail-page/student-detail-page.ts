import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './students-detail-page.html',
  styleUrl: './students-detail-page.css',
})
export class StudentDetailPage {
  // ActivatedRoute contiene información de la ruta activa: params, queryParams, data, etc.
  private route = inject(ActivatedRoute);

  // snapshot: estado de la ruta en el momento de creación del componente.
  // paramMap.get('id'): lee el segmento dinámico :id definido en app.routes.ts.
  readonly id = this.route.snapshot.paramMap.get('id');
}