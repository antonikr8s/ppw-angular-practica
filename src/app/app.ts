import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./components/app-header/app-header";

import { Hero } from './components/app-hero/app-hero';
import { Footer } from './components/app-footer/app-footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    AppHeader, 
    Hero, 
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ppw-angular-practica');
  isLoggedIn = false;

  materias = [
    'Programacion',
    'Estructura de Datos',
    'DataBase'
  ];
}