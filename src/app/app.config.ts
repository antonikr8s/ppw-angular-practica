import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNQwZUtxbF7e8KmV0_YtLMN9N1woI5fPU",
  authDomain: "ppw-angular-practica-fb078.firebaseapp.com",
  projectId: "ppw-angular-practica-fb078",
  storageBucket: "ppw-angular-practica-fb078.firebasestorage.app",
  messagingSenderId: "484458095380",
  appId: "1:484458095380:web:84b46defddad41572e5801",
  measurementId: "G-FM6G3WP5PW"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), 
    provideRouter(routes),
    provideHttpClient(withFetch()), 
    
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Inicializa el proyecto
    provideAuth(() => getAuth()),                            // Habilita Autenticación
    provideFirestore(() => getFirestore())                   // Habilita Base de Datos
  ]
};