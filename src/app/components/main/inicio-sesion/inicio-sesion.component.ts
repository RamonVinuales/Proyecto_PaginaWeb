import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../../services/tareas.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private tareasService: TareasService) {}

  ngOnInit(): void {
    // Código de inicialización si es necesario
  }

  // Método llamado cuando el usuario envía el formulario
  onSubmit(): void {
    if (!this.username || !this.password) {
      console.log('Por favor, complete todos los campos.');
      return;
    }

    if (this.username === 'usuario' && this.password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/list']);
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
