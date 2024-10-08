import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private storageKey = "tareas" ;
  private storageKeyTypes = "Types" ; 
  private storageKeyIcons ="icons"
  constructor(){

    if(this.isLocalStoratgeAvaible()){
      const savedTareas = localStorage.getItem(this.storageKey)
      const savedTypes = localStorage.getItem(this.storageKeyTypes)
      const savedIcons = localStorage.getItem(this.storageKeyIcons)
      if(savedTareas){
        this.tareas = JSON.parse(savedTareas)
      }
      if(savedTypes){
        this.tipoTareas = JSON.parse(savedTypes)
      }
      if(savedIcons){
        this.iconos = JSON.parse(savedIcons)
      }
    }
  }
  tareas:{name:string,type:number}[]=[];
  iconos:string[]=[];
  tipoTareas:string[] =[];
    

    getTareas(){
      return this.tareas;
    }
    getTypos(){
      return this.tipoTareas;

    }
    getIconos(){
      return this.iconos;
    }
    addTipo(tipo:string, icono:string){
      this.tipoTareas.push(tipo);
      this.iconos.push(icono);
      this.saveToLocalStoratgeIconos();
      this.saveToLocalStoratgeTipos();
    }
    deleteTipo(index:number){
      this.tipoTareas.splice(index,1);
      this.iconos.splice(index,1)
      this.saveToLocalStoratgeIconos();
      this.saveToLocalStoratgeTipos();
    }
    addTarea(tarea :{name:string, type:number}){
      this.tareas.push(tarea);
      this.saveToLocalStoratgeTareas();
    }
    modifyTarea(index:number, newTarea :{name:string, type:number}){
      this.tareas[index]= newTarea
    }

    deleteTarea(index:number){
      this.tareas.splice(index,1);
      this.saveToLocalStoratgeTareas();
    }
    private saveToLocalStoratgeTareas(){
      localStorage.setItem(this.storageKey, JSON.stringify(this.tareas));;  
    }
    private saveToLocalStoratgeIconos(){
      localStorage.setItem(this.storageKeyIcons, JSON.stringify(this.iconos));
    }
    private saveToLocalStoratgeTipos(){
      localStorage.setItem(this.storageKeyTypes, JSON.stringify(this.tipoTareas));
    }

    private isLocalStoratgeAvaible():boolean{
      try {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
      } catch (e) {
        return false;
      }
    }
  
}
