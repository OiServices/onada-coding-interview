import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Submission {
  fullName: string;
  email: string;
  github: string;
  track: string;
  submittedCode: string;
  submittedAt: string;
  score?: number;
}

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  submissions: Submission[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('onada_submissions');
      if (saved) {
        this.submissions = JSON.parse(saved);
      }
    }
  }

  updateScore(index: number, score: number) {
    this.submissions[index].score = score;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('onada_submissions', JSON.stringify(this.submissions));
    }
  }

  logout() {
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/admin-login']);
  }
}

