import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit{

tareas: {name: string,type: number} []=[];
constructor(private tareasService : TareasService, private router: Router){}
tipoTareas:string[] =[];
iconos:string[]=[];
descripciones:string[]=[];
indexmdf:number=-1;
modalShow:boolean=false;
  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas();
    this.iconos = this.tareasService.getIconos();
    this.tipoTareas = this.tareasService.getTypos();
    this.descripciones=this.tareasService.getDescripcion();
  }
  
  deleteTarea(event:MouseEvent,index:number){
    event.stopPropagation();
    this.tareasService.deleteTarea(index);
  }

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
