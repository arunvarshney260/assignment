import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReviewcontainerComponent } from './assignment/reviewcontainer/reviewcontainer.component';
import { NgfordirectivesComponent } from './assignment2/ngfordirectives/ngfordirectives.component';


const routes: Routes = [
  {
    path:'review',
    component:ReviewcontainerComponent
  },
  {
    path:'ngfor',
    component:NgfordirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
