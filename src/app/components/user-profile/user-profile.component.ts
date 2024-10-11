import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Perfil de Usuario</h2>
    <div *ngIf="user">
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <h3>Mis Comentarios</h3>
      <ul>
        <li *ngFor="let comment of user.comments">
          {{ comment.text }}
          <button (click)="editComment(comment)">Editar</button>
        </li>
      </ul>
      <h3>Mis Aportaciones</h3>
      <ul>
        <li *ngFor="let contribution of user.contributions">
          {{ contribution.name }}
          <button (click)="editContribution(contribution)">Editar</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 10px; }
    button { background-color: #1976d2; color: white; border: none; padding: 5px 10px; cursor: pointer; margin-left: 10px; }
  `]
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.error('Error al cargar el perfil de usuario:', error)
    );
  }

  editComment(comment: any) {
    // Implementar lógica para editar comentario
    console.log('Editar comentario:', comment);
  }

  editContribution(contribution: any) {
    // Implementar lógica para editar aportación
    console.log('Editar aportación:', contribution);
  }
}