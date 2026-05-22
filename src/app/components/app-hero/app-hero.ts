import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './app-hero.html', 
  styleUrl: './app-hero.css',     
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class Hero {
  readonly technologies = signal(['Angular', 'React', 'Spring Boot', 'PostgreSQL', 'TypeScript']);

  readonly experiences = signal([
    {
      year: '2025 - PRESENTE',
      company: 'Territorios Inteligentes IT',
      role: 'Software Engineer (Prácticas)',
      description: 'Reestructuración de servicios web REST/SOAP, optimización de consultas Oracle y rediseño UI/UX del Portal Ciudadano garantizando alta eficiencia.'
    },
    {
      year: '2023 - 2024',
      company: 'Banco del Austro',
      role: 'Programador Junior',
      description: 'Mantenimiento de funcionalidades internas, análisis y debugging de sistemas en el entorno de desarrollo bancario.'
    }
  ]);
}