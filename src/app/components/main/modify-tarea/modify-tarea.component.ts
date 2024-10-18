import { Component,OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modify-tarea.component.html',
  styleUrl: './modify-tarea.component.css'
})
export class ModifyTareaComponent implements OnInit {

  tareas: {name: string,type: number} []=[];

  constructor(private tareasService : TareasService, private router: Router){}

  tipoTareas:string[] =[];
  iconos:string[]=[];
  indexmdf:number=-1;
  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas();
    this.iconos = this.tareasService.getIconos();
    this.tipoTareas = this.tareasService.getTypos();
    this.indexmdf = this.tareasService.getModify();
  }
  
  modifyTarea(tarea:{name:string,type:string}){
    var typeNumeric:number=parseInt(tarea.type)
    if(!isNaN(typeNumeric)){
      this.tareasService.modifyTarea(this.indexmdf,{name:tarea.name, type:typeNumeric});
    }else {
      console.error('El tipo no es un número válido:');
    }
    this.navigateToListaTarea();
  }
  navigateToListaTarea(){
    let destino:string ="/lista";
  this.router.navigate([destino]);
    }


}
