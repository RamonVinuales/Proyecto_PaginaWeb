import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './components/main/lista-tareas/lista-tareas.component';
import { TareasAddComponent } from "./components/main/tareas-add/tareas-add.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer/footer.component";
import { InicioSesionComponent } from './components/main/inicio-sesion/inicio-sesion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,  // Para poder usar enlaces de RouterLink
    ListaTareasComponent,
    TareasAddComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    InicioSesionComponent  // Añadir el componente de login
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto_Ramon';
}
