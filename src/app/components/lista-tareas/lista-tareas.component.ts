import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit{

tareas: {name: string,type: number} []=[];

constructor(private tareasService : TareasService){}
tipoTareas:string[] =[];
iconos:string[]=[];
indexmdf:number=-1;
  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas();
    this.iconos = this.tareasService.getIconos();
    this.tipoTareas = this.tareasService.getTypos();
  }
  
  deleteTarea(index:number){
    this.tareasService.deleteTarea(index);
  }
  activateModal(index:number){
    this.indexmdf=index;

  }

  modifyTarea(index:number){


  }

}