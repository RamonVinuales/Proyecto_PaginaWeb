import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private storageKey = "tareas" ;
  private storageKeyTypes = "Types" ; 
  private storageKeyIcons ="icons";
  private storatgeKeyDescriptions="Descriptions";
  constructor(){

    if(this.isLocalStoratgeAvaible()){
      const savedTareas = localStorage.getItem(this.storageKey)
      const savedTypes = localStorage.getItem(this.storageKeyTypes)
      const savedIcons = localStorage.getItem(this.storageKeyIcons)
      const saveDescripciones = localStorage.getItem(this.storatgeKeyDescriptions)
      if(savedTareas){
        this.tareas = JSON.parse(savedTareas)
      }
      if(savedTypes){
        this.tipoTareas = JSON.parse(savedTypes)
      }
      if(savedIcons){
        this.iconos = JSON.parse(savedIcons)
      }
      if(saveDescripciones){
        this.descripciones=JSON.parse(saveDescripciones)
      }
    }
  }
  tareas:{name:string,type:number}[]=[];
  iconos:string[]=[];
  tipoTareas:string[] =[];
  descripciones:string[]=[];
  indiceAModificar:number=0;
  detalles:number=0;

    getDescripcion(){
      return this.descripciones
    }
    setModify(newIndice:number){
      this.indiceAModificar=newIndice;
    }
    setDetalles(newIndice:number){
      this.detalles=newIndice;
    }
    getModify(){
      return this.indiceAModificar;
    }
    getTareas(){
      return this.tareas;
    }
    getTypos(){
      return this.tipoTareas;

    }
    getIconos(){
      return this.iconos;
    }
    getDetalles(){
      return this.detalles;
    }
    addTipo(tipo:string, icono:string){
      this.tipoTareas.push(tipo);
      this.iconos.push(icono);
      this.saveToLocalStoratgeIconos();
      this.saveToLocalStoratgeTipos();
    }
    deleteTipo(index:number){
      for(let i=0;i<this.tareas.length;i++){
        if(this.tareas[i].type == index){
          this.tareas.splice(i,1);
        }else{
          if(this.tareas[i].type > index){
              this.tareas[i].type--;
          }
        }
      }
      this.tipoTareas.splice(index,1);
      this.iconos.splice(index,1);
      this.saveToLocalStoratgeIconos();
      this.saveToLocalStoratgeTipos();
    }
    addTarea(tarea :{name:string, type:number},descripcion:string){
      this.tareas.push(tarea);
      this.descripciones.push(descripcion);
      this.saveToLocalStoratgeTareas();
      this.saveToLocalStoratgeDescripcion();
    }
    modifyTarea(index:number, newTarea :{name:string, type:number},descripcion:string){
      this.tareas[index]= newTarea;
      this.descripciones[index]=descripcion;
      this.saveToLocalStoratgeTareas();
      this.saveToLocalStoratgeDescripcion();
    }
    deleteTarea(index:number){
      this.tareas.splice(index,1);
      this.descripciones.splice(index,1);
      this.saveToLocalStoratgeTareas();
      this.saveToLocalStoratgeDescripcion();
    }
    private saveToLocalStoratgeDescripcion(){
        localStorage.setItem(this.storageKey,JSON.stringify(this.descripciones))
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
