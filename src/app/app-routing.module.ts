import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  { path: "aboutus", component: AboutComponent},
  {path: "contactus", component: ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
