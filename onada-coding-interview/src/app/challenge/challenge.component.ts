import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

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

  ngOnInit(): void {
    this.track = localStorage.getItem('track') || 'Frontend';
    const selected = this.challenges[this.track];
    if (selected) {
      this.challengeTitle = selected.title;
      this.challengeDescription = selected.description;
    }
  }

  submitChallenge() {
    console.log('Submitted code:', this.code);
    alert('Challenge submitted! (Stored in console for now)');
  }
}

