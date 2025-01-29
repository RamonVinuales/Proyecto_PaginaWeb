import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { Router } from '@angular/router';

interface Payload {
  id?: number;          
  titulo?: string;      
  nombre?: string;      
  descripcion?: string;       
  tipo?: number;     
  listatareas?:number;
  url?: string;         
  familia_id?: number;
  familia?: number;
  usuario?:number;
  comentarios?:string;
  email?:string;
  contrasenya?:string;
}

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit{

constructor(private tareasService : TareasService, private router: Router){}

  tipoTareas: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  tipoTareasActual: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  tareas:{id:number, nombre: string, tipo:number, listatareas:number}[]=[];
  tareasActuales:{id:number, nombre: string, tipo:number, listatareas:number}[]=[];
  listaTareaActual:number=-1;
  familiaActual: number = 0;


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
    });/*Ajustar la listaTarea actual mediante el service*/
    
    this.tareasActuales = this.tareas.filter(tarea => tarea.listatareas === this.listaTareaActual);
    this.tipoTareasActual = this.tipoTareas.filter(tarea => tarea.familia_id===this.familiaActual);

  }
  
  deleteTarea(event:MouseEvent,index:number){
    event.stopPropagation();
    this.tareasService.eliminarDatos(index,"tareas");
  }

  /*
  eliminarDatos(id: number | string, table: string): Observable<any> {
      const url = `${this.baseUrl}?table=${table}&id=${id}`;
      return this.http.delete(url).pipe(
        catchError(this.handleError)
      );
    }
  */
  goToModify(event:MouseEvent,index:number){
    event.stopPropagation();
    this.tareasService.setModify(index)
    let destino:string ="/modify";
    this.router.navigate([destino]);
  }
  goToDetalles(index:number){
    this.tareasService.setDetalles(index);
    let destino:string ="/detalles";
    this.router.navigate([destino])
  }
}
