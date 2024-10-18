import { Component,OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';
import { __values } from 'tslib';

@Component({
  selector: 'app-tipo-tareas-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tipo-tareas-add.component.html',
  styleUrl: './tipo-tareas-add.component.css'
})
export class TipoTareasAddComponent implements OnInit{

  constructor(private tareaService:TareasService){}
  tipoTareas:string[]=[];
  Iconos:string[]=[];
  ngOnInit(): void {
    this.tipoTareas = this.tareaService.getTypos();
    this.Iconos=this.tareaService.getIconos();
  }
  addTipo(name:string , url:string){
      this.tareaService.addTipo(name,url)
  }
  deleteTipo(index:number){
    this.tareaService.deleteTipo(index)
  }


}




