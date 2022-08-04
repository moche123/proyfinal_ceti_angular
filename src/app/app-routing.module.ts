import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesGuard } from './guards/pages.guard';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'pages', //! https://localhost:4200/pages
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [ PagesGuard ]
  }
  ,
  {

    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
