import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { RepolistComponent } from './components/repo-list/repo-list.component';

const routes: Routes = [
  {component:HomeComponent, path:''},
  {component:RepolistComponent, path:'repo-list'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
