import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path:'characters',
    component: CharactersComponent
  },
  {
    path: '**',
    redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
