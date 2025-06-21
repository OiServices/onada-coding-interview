import { adminGuard } from './admin-login/admin.guard';
import { Routes } from '@angular/router';
import { InterviewLandingComponent } from './interview-landing/interview-landing.component';

export const routes: Routes = [
  {
    path: '',
    component: InterviewLandingComponent
  },
  {
    path: 'candidate-form',
    loadComponent: () =>
      import('./candidate-form/candidate-form.component').then(m => m.CandidateFormComponent)
  },
  {
    path: 'challenge',
    loadComponent: () =>
      import('./challenge/challenge.component').then(m => m.ChallengeComponent)
  },
  {
    path: 'admin-login',
    loadComponent: () =>
      import('./admin-login/admin-login.component').then(m => m.AdminLoginComponent)
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
  }
];

