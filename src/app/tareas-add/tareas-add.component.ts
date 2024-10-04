import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';
import { CommonModule } from '@angular/common';
import { __values } from 'tslib';
@Component({
  selector: 'app-tareas-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas-add.component.html',
  styleUrl: './tareas-add.component.css'
})
export class TareasAddComponent {
  constructor(private tareaService:TareasService){}

  addTarea(name:string, type:string){
    var typeNumeric:number=parseInt(type)
    if(!isNaN(typeNumeric)){
      this.tareaService.addTarea({name, type:typeNumeric});
    }else {
      console.error('El tipo no es un número válido:', type);
    }
  }
  tipos:string[] =["Limpieza","Compras","Personales"];
  iconos:string[]=[
    "https://cdn-icons-png.freepik.com/256/995/995053.png?semt=ais_hybrid",
    "https://cdn-icons-png.flaticon.com/512/107/107831.png",
    "https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
  ];



}
