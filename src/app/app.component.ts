import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './components/main/lista-tareas/lista-tareas.component';
import { TareasAddComponent } from "./components/main/tareas-add/tareas-add.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaTareasComponent, TareasAddComponent, RouterLink, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Ramon';
}
