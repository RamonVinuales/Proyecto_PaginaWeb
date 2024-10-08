import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { TareasAddComponent } from './components/tareas-add/tareas-add.component';
import { TipoTareasAddComponent } from './components/tipo-tareas-add/tipo-tareas-add.component';

export const routes: Routes = [
    {path: "list", component: ListaTareasComponent},
    {path: "add", component: TareasAddComponent},
    {path: "addTipo", component: TipoTareasAddComponent},
    {path: "",redirectTo:"/list",pathMatch:"full"},
    {path: "**", redirectTo:"/list"}
];
