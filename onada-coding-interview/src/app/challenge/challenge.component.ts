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
  challengeTitle = '';
  challengeDescription = '';

  challenges: any = {
    Frontend: {
      title: 'Live Incident Feed UI',
      description: 'Build a dashboard with Tailwind and Angular that shows live safety alerts.'
    },
    Backend: {
      title: 'Incident API',
      description: 'Create a Node or Flask API that logs/fetches incidents with timestamps.'
    },
    'AI/ML': {
      title: 'Crop Disease Predictor',
      description: 'Simulate a Python model that accepts image input and predicts the disease.'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.fullName = params['fullName'] || '';
      this.email = params['email'] || '';
      this.github = params['github'] || '';
      this.track = params['track'] || 'Frontend';

      const selected = this.challenges[this.track];
      if (selected) {
        this.challengeTitle = selected.title;
        this.challengeDescription = selected.description;
      }
    });
  }

  submitChallenge() {
    const submission = {
      fullName: this.fullName,
      email: this.email,
      github: this.github,
      track: this.track,
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

