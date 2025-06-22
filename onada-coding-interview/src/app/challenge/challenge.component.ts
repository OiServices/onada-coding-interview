import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-challenge',
  imports: [CommonModule, FormsModule, MonacoEditorModule],
  providers: [
    provideMonacoEditor({
      defaultOptions: {
        scrollBeyondLastLine: false,
        theme: 'vs-dark',
        automaticLayout: true
      }
    })
  ],
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
      description: 'Create a responsive navbar using Tailwind CSS with active state styling.'
    },
    {
      id: 2,
      title: 'Login Form with Validation',
      description: 'Build a login form in Angular using reactive forms with validation.'
    },
    {
      id: 3,
      title: 'Toggle View Widget',
      description: 'In Flutter, create a stateful widget that toggles between two views.'
    },
    {
      id: 4,
      title: 'Angular Lazy Routing',
      description: 'Implement Angular routing with 2 child components using lazy loading.'
    },
    {
      id: 5,
      title: 'Tailwind Pricing Card',
      description: 'Style a pricing card using Tailwind CSS with hover and responsive layout.'
    },
    {
      id: 6,
      title: 'Google Map Marker in Flutter',
      description: 'Integrate Google Maps in Flutter and show a custom marker.'
    },
    {
      id: 7,
      title: 'API Table Display',
      description: 'Fetch data from a dummy REST API and display it in a styled Angular table.'
    },
    {
      id: 8,
      title: 'Angular Modal',
      description: 'Build a reusable modal component in Angular triggered by a button.'
    },
    {
      id: 9,
      title: 'ListView in Flutter',
      description: 'Create a scrollable list in Flutter using ListView.builder.'
    },
    {
      id: 10,
      title: 'Dark Mode Switcher',
      description: 'Add light/dark mode toggle using Tailwind CSS and Angular service.'
    },
    {
      id: 11,
      title: 'Reusable Dropdown',
      description: 'Build a dropdown component using Angular ControlValueAccessor.'
    },
    {
      id: 12,
      title: 'Animated Widget in Flutter',
      description: 'Animate a widget using AnimatedContainer and user interaction.'
    },
    {
      id: 13,
      title: 'Global State with Angular Services',
      description: 'Use a shared service to sync data between two Angular components.'
    },
    {
      id: 14,
      title: 'Password Strength Indicator',
      description: 'Create a dynamic password strength meter using Angular + Tailwind.'
    },
    {
      id: 15,
      title: 'Lazy Image Loader',
      description: 'Implement lazy loading for images with a placeholder in Angular.'
    },
    {
      id: 16,
      title: 'Flutter List Search + Pagination',
      description: 'Add search filtering and pagination to a list of data in Flutter.'
    },
    {
      id: 17,
      title: 'Star Rating UI',
      description: 'Build a clickable star-rating UI in Angular and store selection.'
    },
    {
      id: 18,
      title: 'Infinite Scroll Blog Page',
      description: 'Build an infinite scrolling blog feed styled with Tailwind CSS.'
    },
    {
      id: 19,
      title: 'Custom Spinner Loader',
      description: 'Design a loading spinner in Flutter and show during API call.'
    },
    {
      id: 20,
      title: 'Multi-Step Form Wizard',
      description: 'Build a 3-step form in Angular with progress indicator and validation.'
    }
  ];

  backendChallenges = [/* ✅ All 20 backend challenges — already present in your file */];
  aiChallenges = [/* ✅ All 20 AI/ML challenges — already present in your file */];

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

