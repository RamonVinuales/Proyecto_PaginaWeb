import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';
import { __values } from 'tslib';
@Component({
  selector: 'app-tareas-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas-add.component.html',
  styleUrl: './tareas-add.component.css'
})
export class TareasAddComponent implements OnInit {
  constructor(private tareaService:TareasService){}

  tipos:string[] =[];
  iconos:string[]=[];

  ngOnInit(): void {
    this.tipos= this.tareaService.getTypos();
    this.iconos=this.tareaService.getTypos();
  }

  addTarea(name:string, type:string, descripcion:string){
    var typeNumeric:number=parseInt(type)
    if(!isNaN(typeNumeric)){
      this.tareaService.addTarea({name, type:typeNumeric});
      this.tareaService.addDescripcion(descripcion);
    }else {
      console.error('El tipo no es un número válido:', type);
    }
  }
  



}
