import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrl:"./app-header.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {


  readonly brand = signal("PPW Angular")
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(
    () => (this.showInfo()
      ? 'Ocultar info' :
      'Mostrar info'));

   toggleInfo() {
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void {
    //actualizar el valor de la senial brand
    this.brand.update((cualquierPalabra) => cualquierPalabra + '!');
  }

  resetBrand(): void {
    this.brand.set("Nombre reseteado")
  }

 

}
