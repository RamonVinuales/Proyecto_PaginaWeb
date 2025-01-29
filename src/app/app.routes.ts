import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListaTareasComponent } from './components/main/lista-tareas/lista-tareas.component';
import { TareasAddComponent } from './components/main/tareas-add/tareas-add.component';
import { TipoTareasAddComponent } from './components/main/tipo-tareas-add/tipo-tareas-add.component';
import { ModifyTareaComponent } from './components/main/modify-tarea/modify-tarea.component';
import { DetalleTareaComponent } from './components/main/detalle-tarea/detalle-tarea.component';
import { InicioSesionComponent } from './components/main/inicio-sesion/inicio-sesion.component';

export const routes: Routes = [
    {path: "list", component: ListaTareasComponent},
    {path: "add", component: TareasAddComponent},
    {path: "addTipo", component: TipoTareasAddComponent},
    {path: "modify", component:ModifyTareaComponent},
    {path: "detalles", component:DetalleTareaComponent},
    {path:"inicio-sesion",component:InicioSesionComponent}
    {path: "",redirectTo:"/inicio-sesion",pathMatch:"full"},
    {path: "**", redirectTo:"/inicio-sesion"}
];
