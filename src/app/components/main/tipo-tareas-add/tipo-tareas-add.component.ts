import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';
import { CommonModule } from '@angular/common';
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
  selector: 'app-tipo-tareas-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tipo-tareas-add.component.html',
  styleUrls: ['./tipo-tareas-add.component.css']
})

export class TipoTareasAddComponent implements OnInit {

  // Propiedades del componente con tipos directamente en la clase
  familiaActual: number = 0;
  tipoTareas: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  tipoTareasActual: { id: number, nombre: string, url: string, familia_id:number }[] = [];
  public form!: FormGroup;

  constructor(private tareasService: TareasService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.familiaActual = this.tareasService.getFamiliaId();

    this.tareasService.getDatos("tipoTareas").subscribe({
      next: (datos) => {
        this.tipoTareas = Object.values(datos);
      },
      error: (err) => {
        console.error('Error al obtener datos:', err);
      }
    });
    // Filtrar tareas por la familia actual
    this.tipoTareasActual = this.tipoTareas.filter(tipo => tipo.familia_id === this.familiaActual);
    }

  send(): void {
    console.log(this.form.value);
  }

  addTipo(name: string, url: string): void {
    const payload:Payload = {nombre:name,url:url,familia_id:this.familiaActual};
    this.tareasService.insertarDatos(payload,"tipotareas");
  }

  deleteTipo(index: number): void {
    this.tareasService.eliminarDatos(index,"tipotareas");
  }

}
