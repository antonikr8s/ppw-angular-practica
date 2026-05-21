import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-hero',
  standalone: true,
  template: `
    <div class="hero bg-base-200 p-8 rounded-3xl shadow-xs">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h2 class="text-3xl font-black text-base-content tracking-tight">{{ title() }}</h2>
          <p class="py-4 text-sm text-base-content/70">{{ text() }}</p>
          <button class="btn btn-primary btn-sm font-bold shadow-md">Comenzar</button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiHero {
  title = input.required<string>();
  text = input.required<string>();
}