import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-landing',
  standalone: true,
  imports: [],
  templateUrl: './interview-landing.component.html',
  styleUrls: ['./interview-landing.component.css'],
})
export class InterviewLandingComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  currentTime: string = '';
  currentDay: string = '';

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    this.currentTime = now.toLocaleTimeString(undefined, options);
    this.currentDay = now.toLocaleDateString(undefined, { weekday: 'long' });
  }

  startInterview(): void {
    window.location.href = '/candidate-form';
  }
}

