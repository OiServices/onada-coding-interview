import { Routes } from '@angular/router';
import { InterviewLandingComponent } from './interview-landing/interview-landing.component';

export const routes: Routes = [
  { path: '', component: InterviewLandingComponent },
  {
    path: 'candidate-form',
    loadComponent: () => import('./candidate-form/candidate-form.component').then(m => m.CandidateFormComponent)
  }
];

