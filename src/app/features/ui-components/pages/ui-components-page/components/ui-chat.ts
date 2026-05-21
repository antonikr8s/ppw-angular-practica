import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-chat',
  standalone: true,
  template: `
    <div class="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-xs w-full space-y-2">
      <div class="chat chat-start text-xs">
        <div class="chat-header font-bold mb-1">{{ sender() }}</div>
        <div class="chat-bubble chat-bubble-primary font-medium">{{ message() }}</div>
      </div>
      <div class="chat chat-end text-xs">
        <div class="chat-header font-bold mb-1">Sistema</div>
        <div class="chat-bubble bg-base-300 text-base-content font-medium">Procesando solicitud de diseño...</div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiChat {
  sender = input<string>('Soporte');
  message = input.required<string>();
}