import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { TareasAddComponent } from "./components/tareas-add/tareas-add.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaTareasComponent, TareasAddComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Ramon';
}
