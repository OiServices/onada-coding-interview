import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-interview-landing',
  templateUrl: './interview-landing.component.html',
  styleUrls: ['./interview-landing.component.css']
})
export class InterviewLandingComponent {
  currentYear: number = new Date().getFullYear(); // ✅ Add this

  constructor(private router: Router) {}

  startInterview() {
    this.router.navigate(['/candidate-form']);
  }
}

