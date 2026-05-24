import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, tap, throwError, timeout } from 'rxjs';
import { SimpsonsResponse, SimpsonsCharacter } from '../models/simpsons.interface';

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://thesimpsonsapi.com/api';

  getCharacters(page: number = 1): Observable<SimpsonsResponse> {
    return this.http
      .get<SimpsonsResponse>(`${this.baseUrl}/characters?page=${page}`)
      .pipe(
        tap((response) => console.log('Simpsons API response:', response)),
        catchError(() => throwError(() => new Error('No se pudieron cargar los personajes')))
      );
  }

  getCharacterById(id: number): Observable<SimpsonsCharacter> {
    return this.http
      .get<SimpsonsCharacter>(`${this.baseUrl}/characters/${id}`)
      .pipe(
        delay(300), 
        timeout(5000), 
        tap((character) => console.log('Character loaded:', character.name)),
        map((character) => ({
          ...character,
          occupation: character.occupation || 'Sin ocupacion registrada',
        })),
        catchError(() => throwError(() => new Error('No se pudo cargar el personaje')))
      );
  }
}