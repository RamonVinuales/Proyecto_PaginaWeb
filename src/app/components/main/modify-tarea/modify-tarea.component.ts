import { Component,OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';
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
  selector: 'app-modify-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modify-tarea.component.html',
  styleUrl: './modify-tarea.component.css'
})
export class ModifyTareaComponent implements OnInit {

  constructor(private tareasService : TareasService, private router: Router){}

  tipoTareas: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  tipoTareasActual: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  familiaActual: number = 0;
  tareas:{id:number, nombre: string, tipo:number, listatareas:number}[]=[];
  tareaActual:{id?:number, nombre?: string, tipo?:number, listatareas?:number}={};
  indexmdf:number=-1;
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
    this.familiaActual=this.tareasService.getFamiliaId();
    this.indexmdf=this.tareasService.getModify();
    this.tareas.forEach(tarea => {
      if(tarea.id=this.indexmdf){
        this.tareaActual=tarea;
      }
    });
  }
  
  modifyTarea(tarea:{name:string,type:string}){
    var typeNumeric:number=parseInt(tarea.type)
    if(!isNaN(typeNumeric)){
      
      const payload:Payload={id:this.tareaActual["id"],nombre:tarea.name,tipo:typeNumeric,listatareas:this.tareaActual.listatareas};
      this.tareasService.updateDatos(payload,"tareas");
      
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
