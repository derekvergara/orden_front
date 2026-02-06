import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) {}
  message='';
  messageType:'success' | 'error' | '' = '';
  onLogin() {
    this.authService.login({username :this.username, password: this.password}).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.message = 'Inicio de sesion correcto';
        this.messageType = 'success';
        this.router.navigate(['/dashboard']); // redirecciona al dashboard
        },
        error :() => {
          this.message = 'Credenciales incorrectas';
          this.messageType = 'error';
        }
    });
  }
}
