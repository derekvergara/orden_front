import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  role = 'user'; // usuario por defecto
  constructor(private authService: AuthService) {}
  onRegister() {
    this.authService.register({username: this.username, password: this.password, role: this.role}).subscribe({
      next: () => alert('Registrado Correctamente'),
      error: () => alert('Error al registrar')
    });
  }
}
