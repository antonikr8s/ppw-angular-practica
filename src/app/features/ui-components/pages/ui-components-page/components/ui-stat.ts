import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-stat',
  standalone: true,
  template: `
    <div class="stats shadow-xs border border-base-200 bg-base-100 w-full rounded-2xl p-2">
      <div class="stat">
        <div class="stat-title text-xs font-bold uppercase tracking-wider">{{ title() }}</div>
        <div class="stat-value text-2xl font-black text-primary my-1">{{ value() }}</div>
        <div class="stat-desc text-xs text-base-content/60">{{ desc() }}</div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiStat {
  title = input.required<string>();
  value = input.required<string>();
  desc = input<string>('Dentro del rango esperado');
}