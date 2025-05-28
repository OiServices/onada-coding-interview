import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-interview-landing',
  templateUrl: './interview-landing.component.html',
  styleUrls: ['./interview-landing.component.css']
})
export class InterviewLandingComponent {
  constructor(private router: Router) {}

  startInterview() {
    this.router.navigate(['/candidate-form']);
  }
}

