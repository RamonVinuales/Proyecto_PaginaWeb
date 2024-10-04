import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private storageKey = "tareas" ;
  private storageKeyitems = "items" ; 
  private storageKeyIcons ="icons"
  constructor(){

    if(this.isLocalStoratgeAvaible()){
      const savedTareas = localStorage.getItem(this.storageKey)
      const savedTypes = localStorage.getItem(this.storageKeyitems)
      const savedIcons = localStorage.getItem(this.storageKeyIcons)
      if(savedTareas){
        this.tareas = JSON.parse(savedTareas)
      }
      if(savedTypes){
        this.tareas = JSON.parse(savedTypes)
      }
      if(savedIcons){
        this.tareas = JSON.parse(savedIcons)
      }
    }
  }
  tareas:{name:string,type:number}[]=[];
  iconos:string[]=[
    "https://cdn-icons-png.freepik.com/256/995/995053.png?semt=ais_hybrid",
    "https://cdn-icons-png.flaticon.com/512/107/107831.png",
    "https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
  ];
  tipoTareas:string[] =["Limpieza","Compras","Personales"];


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
      this.iconos.push(icono[1]);
      this.saveToLocalStoratge();
    }
    addTarea(tarea :{name:string, type:number}){
      this.tareas.push(tarea);
      this.saveToLocalStoratge();
    }

    deleteTarea(index:number){
      this.tareas.splice(index,1);
      this.saveToLocalStoratge();
    }
    private saveToLocalStoratge(){
      localStorage.setItem(this.storageKey, JSON.stringify(this.tareas));
    }
    private isLocalStoratgeAvaible():boolean{
      try {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
      } catch (e) {
        return false;
      }
    }
  
}
