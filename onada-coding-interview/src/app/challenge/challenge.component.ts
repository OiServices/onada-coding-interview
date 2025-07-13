import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  fullName = '';
  email = '';
  github = '';
  track = '';
  challengeId = 1;
  challengeTitle = '';
  challengeDescription = '';

  frontendChallenges = [
    { id: 1, title: 'Responsive Navbar', description: 'Create a responsive navbar using Tailwind CSS with active state styling.' },
    { id: 2, title: 'Login Form with Validation', description: 'Build a login form in Angular using reactive forms with validation.' },
    { id: 3, title: 'Toggle View Widget', description: 'In Flutter, create a stateful widget that toggles between two views.' },
    { id: 4, title: 'Angular Lazy Routing', description: 'Implement Angular routing with 2 child components using lazy loading.' },
    { id: 5, title: 'Tailwind Pricing Card', description: 'Style a pricing card using Tailwind CSS with hover and responsive layout.' },
    { id: 6, title: 'Google Map Marker in Flutter', description: 'Integrate Google Maps in Flutter and show a custom marker.' },
    { id: 7, title: 'API Table Display', description: 'Fetch data from a dummy REST API and display it in a styled Angular table.' },
    { id: 8, title: 'Angular Modal', description: 'Build a reusable modal component in Angular triggered by a button.' },
    { id: 9, title: 'ListView in Flutter', description: 'Create a scrollable list in Flutter using ListView.builder.' },
    { id: 10, title: 'Dark Mode Switcher', description: 'Add light/dark mode toggle using Tailwind CSS and Angular service.' },
    { id: 11, title: 'Reusable Dropdown', description: 'Build a dropdown component using Angular ControlValueAccessor.' },
    { id: 12, title: 'Animated Widget in Flutter', description: 'Animate a widget using AnimatedContainer and user interaction.' },
    { id: 13, title: 'Global State with Angular Services', description: 'Use a shared service to sync data between two Angular components.' },
    { id: 14, title: 'Password Strength Indicator', description: 'Create a dynamic password strength meter using Angular + Tailwind.' },
    { id: 15, title: 'Lazy Image Loader', description: 'Implement lazy loading for images with a placeholder in Angular.' },
    { id: 16, title: 'Flutter List Search + Pagination', description: 'Add search filtering and pagination to a list of data in Flutter.' },
    { id: 17, title: 'Star Rating UI', description: 'Build a clickable star-rating UI in Angular and store selection.' },
    { id: 18, title: 'Infinite Scroll Blog Page', description: 'Build an infinite scrolling blog feed styled with Tailwind CSS.' },
    { id: 19, title: 'Custom Spinner Loader', description: 'Design a loading spinner in Flutter and show during API call.' },
    { id: 20, title: 'Multi-Step Form Wizard', description: 'Build a 3-step form in Angular with progress indicator and validation.' }
  ];

  backendChallenges = [
    { id: 1, title: 'REST API with Express', description: 'Build a RESTful API in Node.js with CRUD endpoints for a blog system.' },
    { id: 2, title: 'JWT Authentication', description: 'Create a login/register API with JWT-based authentication.' },
    { id: 3, title: 'File Upload API', description: 'Build an Express API to handle file uploads using Multer.' },
    { id: 4, title: 'MongoDB Aggregation', description: 'Use MongoDB aggregation to generate analytics for a sales database.' },
    { id: 5, title: 'PostgreSQL Relationship Design', description: 'Design and implement a relational schema for a course management system.' },
    { id: 6, title: 'Rate Limiting Middleware', description: 'Implement a custom rate limiter for API endpoints using Express middleware.' },
    { id: 7, title: 'Redis Caching Layer', description: 'Integrate Redis into an API to cache frequent GET requests.' },
    { id: 8, title: 'API Versioning', description: 'Support two versions of your API (v1 and v2) with separate route handling.' },
    { id: 9, title: 'WebSocket Chat Server', description: 'Build a basic WebSocket server to handle real-time messaging.' },
    { id: 10, title: 'SQL Injection Prevention', description: 'Secure your SQL queries against injection in a Node/Postgres backend.' },
    { id: 11, title: 'Background Job with Bull', description: 'Use Bull or another queue system to offload long-running tasks.' },
    { id: 12, title: 'Email Notification System', description: 'Create an email service that sends messages on user registration.' },
    { id: 13, title: 'Secure REST API', description: 'Add helmet, cors, rate limiters, and input sanitizers to secure your Express app.' },
    { id: 14, title: 'Environment Config Loader', description: 'Build a config service that loads from `.env` and supports dev/prod modes.' },
    { id: 15, title: 'Database Seeder Script', description: 'Create a Node.js script to seed your database with sample data.' },
    { id: 16, title: 'Session Management', description: 'Implement session-based login using express-session and MongoDB.' },
    { id: 17, title: 'User Roles & Permissions', description: 'Restrict access to endpoints based on user roles (admin/user).' },
    { id: 18, title: 'API Gateway Proxy', description: 'Simulate a simple API gateway proxying requests to microservices.' },
    { id: 19, title: 'Logging Middleware', description: 'Build a logger middleware that logs requests to a file.' },
    { id: 20, title: 'Swagger Documentation', description: 'Document your API using Swagger/OpenAPI and serve on `/docs`.' }
  ];

  aiChallenges = [
    { id: 1, title: 'Text Sentiment Classifier', description: 'Train a model to classify text sentiment using TensorFlow/Keras.' },
    { id: 2, title: 'Crop Disease Detector', description: 'Use a CNN to classify images of diseased crops from PlantVillage dataset.' },
    { id: 3, title: 'Resume Skill Extractor', description: 'Build an NLP model to extract skills from resumes.' },
    { id: 4, title: 'Chatbot with GPT API', description: 'Integrate OpenAI API to build a customer support chatbot.' },
    { id: 5, title: 'Facial Emotion Detection', description: 'Use OpenCV and a trained CNN to detect emotions from face images.' },
    { id: 6, title: 'Spam Email Classifier', description: 'Train a Naive Bayes or Logistic Regression model to detect spam.' },
    { id: 7, title: 'Voice Gender Recognition', description: 'Classify speaker gender using audio MFCC features.' },
    { id: 8, title: 'Loan Default Predictor', description: 'Build a binary classifier to predict loan repayment probability.' },
    { id: 9, title: 'JAMB Score Predictor', description: 'Predict students’ JAMB scores using regression techniques.' },
    { id: 10, title: 'Topic Modeling on News', description: 'Use LDA to extract topics from a dataset of news articles.' },
    { id: 11, title: 'OCR with Tesseract', description: 'Extract text from scanned documents using Tesseract OCR.' },
    { id: 12, title: 'Fake News Detector', description: 'Use NLP features to build a fake news classifier.' },
    { id: 13, title: 'YOLO Object Detection', description: 'Detect objects in real-time using a pretrained YOLO model.' },
    { id: 14, title: 'Time Series Forecasting', description: 'Predict future sales using ARIMA or LSTM on historical data.' },
    { id: 15, title: 'Document Similarity Search', description: 'Implement cosine similarity search for finding similar documents.' },
    { id: 16, title: 'Named Entity Recognition', description: 'Extract names, locations, and orgs from raw text using spaCy.' },
    { id: 17, title: 'Handwriting Digit Recognition', description: 'Use MNIST dataset to classify digits with CNN.' },
    { id: 18, title: 'Recommender System', description: 'Build a movie recommender based on collaborative filtering.' },
    { id: 19, title: 'Anomaly Detection', description: 'Detect abnormal transactions or data points using Isolation Forest.' },
    { id: 20, title: 'AI Image Captioning', description: 'Build a model that generates captions for images using CNN+RNN.' }
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

