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
  tipoTareas: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  tareas:{id:number, nombre: string, tipo:number, listatareas:number}[]=[];
  tareaActual:{id?:number, nombre?: string, tipo?:number, listatareas:number}={listatareas:0};
  detallesIndx:number=-1;

  ngOnInit(): void {
    this.tareasService.getDatos("tipoTareas").subscribe({
      next: (datos) => {
        this.tipoTareas = Object.values(datos);
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      }
    });
    this.tareasService.getDatos("tareas").subscribe({
      next: (datos) => {
        this.tareas = Object.values(datos);
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      }
    }); 
    this.detallesIndx=this.tareasService.getDetalles();
    this.tareaActual=this.tareas[this.detallesIndx];

  }
}
