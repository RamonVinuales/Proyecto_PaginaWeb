import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';
import { __values } from 'tslib';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'app-tareas-add',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './tareas-add.component.html',
  styleUrl: './tareas-add.component.css'
})
export class TareasAddComponent implements OnInit {
  constructor(private tareaService:TareasService, private formBuilder:FormBuilder){}

  public form!:FormGroup;
  tipoTareas: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  tipoTareasActual: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  familiaActual: number = 0;
  tareas:{id:number, nombre: string, tipo:number, listatareas:number}[]=[];
  tareasActual:{id:number, nombre: string, tipo:number, listatareas:number}[]=[];




  ngOnInit(): void {
/*----------------------------------------------------------------------*/
    this.form=this.formBuilder.group({
      nombreTarea:['',[
        Validators.required
      ]],
      tipoTarea:['',Validators.required],
      decripcionTarea:['',]
    });
/*--------------------------------------------------------------------*/
    this.tareaService.getDatos("tipoTareas").subscribe({
      next: (datos) => {
        this.tipoTareas = Object.values(datos);
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      }
    });
    this.tareaService.getDatos("tareas").subscribe({
      next: (datos) => {
        this.tareas = Object.values(datos);
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      }
    });
    this.familiaActual=this.tareaService.getFamiliaId();
/*-----------------------------------------------------------------*/
  }
  send(){
    console.log(this.form.value);
  }
  
  addTarea(name:string, type:string, descripcion:string){
    var typeNumeric:number=parseInt(type)
    if(!isNaN(typeNumeric)){
      const payload:Payload = {nombre:name,tipo:typeNumeric,familia_id:this.familiaActual};
      this.tareaService.insertarDatos(payload,"tareas");  
    }else {
      console.error('El tipo no es un número válido:', type);
    }
  }
  



}
