import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-timeline',
  standalone: true,
  template: `
    <div class="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-xs w-full text-xs">
      <ul class="timeline timeline-vertical lg:timeline-horizontal">
        <li>
          <div class="timeline-start font-bold">Fase 01</div>
          <div class="timeline-middle">⚙️</div>
          <div class="timeline-end bg-base-200 p-2 rounded-lg font-medium">{{ f1() }}</div>
          <hr class="bg-primary"/>
        </li>
        <li>
          <hr class="bg-primary"/>
          <div class="timeline-start font-bold">Fase 02</div>
          <div class="timeline-middle">🚀</div>
          <div class="timeline-end bg-primary text-primary-content p-2 rounded-lg font-bold">{{ f2() }}</div>
        </li>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTimeline {
  f1 = input<string>('Setup de Arquitectura');
  f2 = input<string>('Despliegue del Catálogo');
}