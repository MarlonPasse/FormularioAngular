import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PathLocationStrategy } from '@angular/common';
import { ControlContainer } from '@angular/forms';
import { ComtatoComponent } from './views/comtato/comtato.component';

const routes: Routes = [
  {path:"home", component: HomeComponent}
  {path:"contato", component: ComtatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
