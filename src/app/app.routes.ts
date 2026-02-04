import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate:[authGuard],data: { role :'admin'} },
  { path: 'register', component: RegisterComponent, canActivate:[authGuard],data: { role: 'admin'}},
  { path: 'dashboard', component: DashboardComponent , canActivate: [authGuard], data: { role: 'admin' } },
  { path: 'data', component: DashboardComponent, canActivate: [authGuard],data: { role:'user'} },
];