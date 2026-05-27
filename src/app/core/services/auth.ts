import { Injectable, inject } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  // authState emite null cuando no hay sesion, o el objeto User cuando hay sesion. [cite: 279]
  // toSignal convierte el Observable en un signal reactivo para usar en templates. [cite: 279]
  currentUser = toSignal(authState(this.auth));

  // signInWithEmailAndPassword devuelve una Promise. [cite: 280]
  // from() la convierte en Observable para poder encadenar operadores RxJS o usar con rxResource. [cite: 281]
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // Igual que login, se convierte la Promise a Observable. [cite: 283]
  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  // Acceso rapido al uid del usuario actual (null si no esta autenticado). [cite: 285]
  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }
}