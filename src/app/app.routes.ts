import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/students-detail-page/student-detail-page';
import { LayoutsPage } from './features/layout/pages/layouts-page';
import { SingupPage } from './features/singup/pages/singup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import { ProjectConfigPage } from './features/project/pages/project-config-page/project-config-page';
import { UiComponentsPage } from './features/ui-components/pages/ui-components-page/ui-components-page';
import { AuthPageComponent } from './features/auth/pages/auth-page/auth-page';

import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'students', component: StudentsPage },
  { path: 'students/:id', component: StudentDetailPage },
  { path: 'layouts', component: LayoutsPage },
  { path: 'singup-page', component: SingupPage },
  { path: 'ui-components', component: UiComponentsPage },
  {
    path: 'simpsons',
    loadComponent: () => import('./features/simpsons/pages/simpsons-page/simpsons-page').then(m => m.SimpsonsPageComponent)
  },
  
  { path: 'profile', component: ProfilePage, canActivate: [authGuard] },
  { path: 'project-config', component: ProjectConfigPage, canActivate: [authGuard] },
  
  { path: 'auth', component: AuthPageComponent, canActivate: [guestGuard] },
  
  { path: '**', redirectTo: '' }
];