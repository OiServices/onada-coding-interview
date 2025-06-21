import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-admin-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@onada.com' && this.password === 'onada2025') {
      localStorage.setItem('onada_admin', 'true');
      this.router.navigate(['/admin']);
    } else {
      this.error = 'Invalid credentials. Try again.';
    }
  }
}

