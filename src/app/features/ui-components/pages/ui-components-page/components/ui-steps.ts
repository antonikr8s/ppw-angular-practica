import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-steps',
  standalone: true,
  template: `
    <div class="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-xs flex justify-center w-full">
      <ul class="steps steps-vertical md:steps-horizontal w-full text-xs font-semibold">
        @for (step of steps(); track step; let i = $index) {
          <li class="step" [class.step-primary]="i <= currentStep()">{{ step }}</li>
        }
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSteps {
  steps = input<string[]>(['Requisitos', 'Diseño', 'Desarrollo', 'Producción']);
  currentStep = input<number>(2); // Por defecto ilumina hasta el tercer paso (índice 2)
}