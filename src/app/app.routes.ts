import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareasAddComponent } from './tareas-add/tareas-add.component';

export const routes: Routes = [
    {path: "list", component: ListaTareasComponent},
    {path: "add", component: TareasAddComponent},
    {path: "",redirectTo:"/list",pathMatch:"full"},
    {path: "**", redirectTo:"/list"}
];
