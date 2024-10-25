import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-tarea.component.html',
  styleUrl: './detalle-tarea.component.css'
})
export class DetalleTareaComponent implements OnInit {
  constructor(private tareasService : TareasService, private router: Router){}
  tareas:{name:string,type:number} []=[];
  iconos:string[]=[];
  descripciones:string[]=[];
  tipoTareas:string[]=[];
  indexdtl:number=-1;
  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas();
    this.iconos = this.tareasService.getIconos();
    this.descripciones = this.tareasService.getDescripcion();
    this.tipoTareas = this.tareasService.getTypos();
    this.indexdtl = this.tareasService.getDetalles();
  }
}
