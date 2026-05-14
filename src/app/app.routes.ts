import { Routes } from '@angular/router';
import { HomePage } from './feactures/home/pages/home-page/home-page';
import { StudentsPage } from './feactures/students/pages/students-page/students-page';
import { StudentsDetailPage } from './feactures/students/pages/students-detail-page/students-detail-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'students', component: StudentsPage}, //raiz
    {path: 'students/:id', component: StudentsDetailPage},//codigo_codigo
    //ruta de redireccionamiento
    {path: '**', redirectTo: ''}
];
