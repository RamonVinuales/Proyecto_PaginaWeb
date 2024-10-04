import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

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
tipoTareas:string[] =["Limpieza","Compras","Personales"];
iconos:string[]=[
  "https://cdn-icons-png.freepik.com/256/995/995053.png?semt=ais_hybrid",
  "https://cdn-icons-png.flaticon.com/512/107/107831.png",
  "https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
];

  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas();
    this.iconos = this.tareasService.getIconos();
    this.tipoTareas = this.tareasService.getTypos();
  }
  
  deleteTarea(index:number){
    this.tareasService.deleteTarea(index);
  }



}
