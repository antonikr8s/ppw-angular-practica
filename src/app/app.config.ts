import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Usamos el nombre oficial sin la palabra "Experimental"
    provideZonelessChangeDetection(), 
    
    provideRouter(routes),
    
    // Cliente HTTP con withFetch() tal como pide tu rúbrica
    provideHttpClient(withFetch()) 
  ]
};