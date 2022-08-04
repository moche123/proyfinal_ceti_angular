import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  // {
  //   path:'characters',
  //   component: CharactersComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: 'characters'
  // }
  {
    path: '',
    component: PagesComponent,
    children: [
      //! http://localhost:4200/pages

      { path: '', redirectTo: 'characters' },
      { path: 'characters', component: CharactersComponent },  //! http://localhost:4200/pages/characters
      { path: 'favorites', component: FavoritesComponent } //! http://localhost:4200/pages/favorites
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
