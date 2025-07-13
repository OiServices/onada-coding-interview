import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-candidate-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {
  fullName = '';
  email = '';
  github = '';
  track = 'Frontend';
  resume: File | null = null;

  constructor(private router: Router) {}

  handleFileChange(event: any) {
    this.resume = event.target.files[0];
  }

  submitForm() {
    console.log('✅ Form submitted:', {
      fullName: this.fullName,
      email: this.email,
      github: this.github,
      track: this.track,
      resume: this.resume
    });

    const lowerTrack = this.track.toLowerCase();
    this.router.navigate([`/challenge/${lowerTrack}/1`], {
      queryParams: {
        fullName: this.fullName,
        email: this.email,
        github: this.github
      }
    });
  }
}

