import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users: any[] = [];
  message='';
  messageType:'success' | 'error' | '' = '';
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit(){
    this.loadUsers();
  }
  loadUsers() {
    this.http.get('http://localhost:3000/api/users').subscribe({
      next: (res: any) => {
        this.users =res;
      },
      error: () => {
        this.message = 'Error al cargar usuarios';
        this.messageType = 'error';
      }
    });
  }

  deleteUser (id: string){
    this.http.delete(`http://localhost:3000/api/users/${id}`).subscribe({
      next: () => {
        this.message = 'Usuario eliminado correctamente';
        this.messageType = 'success';
        this.loadUsers();
      },
      error: () => {
        this.message = 'Error al eliminar usuario';
        this.messageType = 'error';
      }
    });
  }
}
