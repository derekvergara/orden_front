import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    this.authService.login({username :this.username, password: this.password}).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        alert('Inicio de Sesion Correcto');
        this.router.navigate(['/dashboard']); // redirecciona al dashboard
        },
        error :() => alert('Credenciales incorrectas ')
    });
  }
}
