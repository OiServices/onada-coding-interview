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
  Phone No = '';
  github = '';
  track = '';
  challengeId = 1;
  challengeTitle = '';
  challengeDescription = '';

  frontendChallenges = [/* ... your 20 frontend challenges (already added) ... */];

  backendChallenges = [
    {
      id: 1,
      title: 'REST API with Express',
      description: 'Create a REST API with Express.js that handles GET and POST requests.'
    },
    {
      id: 2,
      title: 'Supabase Data Fetch',
      description: 'Connect to Supabase and fetch records from a public table using REST API.'
    },
    {
      id: 3,
      title: 'JWT Authentication API',
      description: 'Build a login/signup API in Node.js or Flask with JWT-based authentication.'
    },
    {
      id: 4,
      title: 'Insert Data in PostgreSQL',
      description: 'Create a Flask API that inserts form data into a PostgreSQL database.'
    },
    {
      id: 5,
      title: 'Add Rate Limiting',
      description: 'Protect your Express app with basic CORS and rate-limiting middleware.'
    },
    {
      id: 6,
      title: 'Supabase Signup API',
      description: 'Use Supabase Auth to implement user registration and save user metadata.'
    },
    {
      id: 7,
      title: 'SQL Search Filter API',
      description: 'Build a backend route that returns search results using SQL LIKE queries.'
    },
    {
      id: 8,
      title: 'Error Handler Middleware',
      description: 'Implement error-handling middleware in Express that catches all exceptions.'
    },
    {
      id: 9,
      title: 'File Upload with Multer',
      description: 'Set up file upload support in an Express route using Multer.'
    },
    {
      id: 10,
      title: 'Secure Env Variables',
      description: 'Use dotenv to manage and securely load environment variables.'
    },
    {
      id: 11,
      title: 'SQL Join Query',
      description: 'Write a raw SQL query to join two tables and filter the results by condition.'
    },
    {
      id: 12,
      title: 'Admin-only Flask Route',
      description: 'Create a protected Flask route accessible only by admin-level users.'
    },
    {
      id: 13,
      title: 'Deploy Flask API',
      description: 'Deploy your Flask API to Render, Railway, or Heroku and make a test call.'
    },
    {
      id: 14,
      title: 'Supabase RLS Policy',
      description: 'Write a Supabase Row-Level Security (RLS) policy to restrict table access.'
    },
    {
      id: 15,
      title: 'Send Email with NodeMailer',
      description: 'Build a simple contact form API that sends email using NodeMailer.'
    },
    {
      id: 16,
      title: 'Paginated GET API',
      description: 'Create a GET endpoint that returns paginated JSON data using query params.'
    },
    {
      id: 17,
      title: 'PostgreSQL CLI Script',
      description: 'Write a Python script that inserts a CSV file into PostgreSQL.'
    },
    {
      id: 18,
      title: 'Supabase Auth Integration',
      description: 'Build a login page in Node.js using Supabase auth and show user metadata.'
    },
    {
      id: 19,
      title: 'Node.js Redis Cache',
      description: 'Add a simple Redis caching layer to an existing API route.'
    },
    {
      id: 20,
      title: 'Swagger API Docs',
      description: 'Set up Swagger documentation for your RESTful API using OpenAPI.'
    }
  ];

  aiChallenges = [
    {
      id: 1,
      title: 'Data Summary with Pandas',
      description: 'Load a CSV file and output basic statistics using Python pandas.'
    },
    {
      id: 2,
      title: 'Handle Missing Data',
      description: 'Clean a noisy dataset and fill or drop missing values using pandas.'
    },
    {
      id: 3,
      title: 'Train Logistic Regression',
      description: 'Train a logistic regression model with scikit-learn on a binary dataset.'
    },
    {
      id: 4,
      title: 'Data Visualization',
      description: 'Visualize key features of a dataset using matplotlib or seaborn.'
    },
    {
      id: 5,
      title: 'NLP Preprocessing',
      description: 'Preprocess a text dataset for NLP using tokenization and stopword removal.'
    },
    {
      id: 6,
      title: 'Use OpenAI GPT API',
      description: 'Call the OpenAI GPT API to generate a summary of a given article.'
    },
    {
      id: 7,
      title: 'Spam Classifier',
      description: 'Train a spam vs ham classifier using Naive Bayes and scikit-learn.'
    },
    {
      id: 8,
      title: 'Prediction API in Flask',
      description: 'Create a REST API in Flask that serves ML predictions via a POST request.'
    },
    {
      id: 9,
      title: 'Train CNN on MNIST',
      description: 'Train a CNN using TensorFlow or PyTorch on the MNIST digits dataset.'
    },
    {
      id: 10,
      title: 'Fine-Tune BERT',
      description: 'Fine-tune a BERT model for sentiment analysis using HuggingFace Transformers.'
    },
    {
      id: 11,
      title: 'LangChain QA Bot',
      description: 'Use LangChain to build a simple QA bot over local documents.'
    },
    {
      id: 12,
      title: 'Anomaly Detection',
      description: 'Detect anomalies in time-series data using Isolation Forest.'
    },
    {
      id: 13,
      title: 'Deploy Model with FastAPI',
      description: 'Deploy a machine learning model using FastAPI and test it with curl/Postman.'
    },
    {
      id: 14,
      title: 'AI Job Description Generator',
      description: 'Use the GPT API to generate a job description based on a role and level.'
    },
    {
      id: 15,
      title: 'Extract Resume Keywords',
      description: 'Write a script to extract keywords from a resume text using spaCy or NLTK.'
    },
    {
      id: 16,
      title: 'Speech-to-Text Converter',
      description: 'Use Python and SpeechRecognition to convert voice input to text.'
    },
    {
      id: 17,
      title: 'CNN for Image Classification',
      description: 'Build a CNN model that classifies custom images using TensorFlow.'
    },
    {
      id: 18,
      title: 'Named Entity Recognition',
      description: 'Perform NER on input text using spaCy and display the tagged entities.'
    },
    {
      id: 19,
      title: 'AI Image Labeler',
      description: 'Use OpenCV to draw bounding boxes and label detected objects in an image.'
    },
    {
      id: 20,
      title: 'WAEC/JAMB Chatbot',
      description: 'Build a chatbot that answers WAEC/JAMB-style questions using GPT.'
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

