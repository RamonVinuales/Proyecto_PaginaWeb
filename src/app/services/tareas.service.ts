import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Payload {
  id?: number;          // ID de la tarea (opcional, puede ser null si no se proporciona)
  titulo?: string;      // Título de la tarea         
  nombre?: string;      // Nombre de la tarea
  descripcion?: string;       // Descripción de la tarea
  tipo?: number;     // Relación con 'tipoTareas'
  listatareas?:number;
  url?: string;         // URL asociada con la tarea
  familia_id?: number;
  familia?: number;
  usuario?:number;
  comentarios?:string;
  email?:string;
  contrasenya?:string;
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  mdfyIndx=0;
  detallesIndx=0;
  usuarioIndx=0;
  familiaId=0;  

  private baseUrl = 'http://192.168.0.111:80/api/ramon/Api.php';
  indexdetalles: number = 0;
  constructor(private http: HttpClient) { }
  setFamiliaId(Id:number){
    this.familiaId=Id;
  }
  setIndexDetalles(newIndex: number): void {
    this.indexdetalles = newIndex;
  }
  setModify(index:number){
    this.mdfyIndx=index;
  }
  setDetalles(index:number){
    this.detallesIndx=index;
  }
  setUsuario(index:number){
    this.usuarioIndx=index;
  }
  getIndexDetalles(): number {
    return this.indexdetalles;
  }
  getFamiliaId(){
    return this.familiaId;
  }
  getModify(){
    return this.mdfyIndx;
  }
  
  getDetalles(){
    return this.detallesIndx;
  }
  
  getUsuario(){
    return this.usuarioIndx;
  }
  

  // Función para insertar datos (POST)
  insertarDatos(datos: Payload, table: string): Observable<any> {
    const url = `${this.baseUrl}?table=${table}`;
    return this.http.post(url, datos).pipe(
      catchError(this.handleError)
    );
  }

  // Función para eliminar datos (DELETE)
  eliminarDatos(id: number | string, table: string): Observable<any> {
    const url = `${this.baseUrl}?table=${table}&id=${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  // Función para actualizar datos (PUT)
  updateDatos(payload: Payload, table: string): Observable<any> {
    const url = `${this.baseUrl}?table=${table}&id=${payload['id']}`;
    return this.http.put(url, payload).pipe(
      catchError(this.handleError)
    );
  }

  // Función para obtener datos (GET)
  getDatos(table: string): Observable<any> {
    const url = `${this.baseUrl}?table=${table}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores comunes
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error de red:', error.error.message);
    } else {
      console.error(
        `Código de error: ${error.status}, ` +
        `Mensaje: ${error.message}`
      );
    }
    return throwError('Algo salió mal. Por favor, intenta nuevamente más tarde.');
  }
}