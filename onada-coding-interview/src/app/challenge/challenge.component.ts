import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-challenge',
  imports: [CommonModule, FormsModule, MonacoEditorModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  code: string = '// Start coding here...';
  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    automaticLayout: true
  };

  fullName = '';
  email = '';
  github = '';
  track = '';
  challengeId = 1;
  challengeTitle = '';
  challengeDescription = '';

  frontendChallenges = [
    {
      id: 1,
      title: 'Responsive Navbar',
      description:
        'Create a responsive navbar using Tailwind CSS with active state styling.'
    },
    {
      id: 2,
      title: 'Login Form with Validation',
      description:
        'Build a login form in Angular using reactive forms with validation.'
    },
    // add more later
  ];

  backendChallenges = [
    {
      id: 1,
      title: 'Incident API',
      description: 'Create a Node or Flask API that logs/fetches incidents with timestamps.'
    }
  ];

  aiChallenges = [
    {
      id: 1,
      title: 'Crop Disease Predictor',
      description: 'Simulate a Python model that accepts image input and predicts the disease.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.track = this.route.snapshot.paramMap.get('track') || 'Frontend';
    this.challengeId = Number(this.route.snapshot.paramMap.get('id')) || 1;

    this.route.queryParams.subscribe((params) => {
      this.fullName = params['fullName'] || '';
      this.email = params['email'] || '';
      this.github = params['github'] || '';
    });

    const list: any = {
      Frontend: this.frontendChallenges,
      Backend: this.backendChallenges,
      'AI/ML': this.aiChallenges,
      frontend: this.frontendChallenges,
      backend: this.backendChallenges,
      ai: this.aiChallenges,
      ai_ml: this.aiChallenges,
      ai_ml_full: this.aiChallenges
    };

    const challengeList = list[this.track];
    const challenge = challengeList?.find((c: any) => c.id === this.challengeId);
    this.challengeTitle = challenge?.title || 'Challenge Not Found';
    this.challengeDescription = challenge?.description || '';
  }

  submitChallenge() {
    const submission = {
      fullName: this.fullName,
      email: this.email,
      github: this.github,
      track: this.track,
      challengeId: this.challengeId,
      submittedCode: this.code,
      submittedAt: new Date().toISOString(),
      score: null
    };

    const existing = JSON.parse(localStorage.getItem('onada_submissions') || '[]');
    existing.push(submission);
    localStorage.setItem('onada_submissions', JSON.stringify(existing));

    alert('✅ Challenge submitted successfully!');
  }
}

