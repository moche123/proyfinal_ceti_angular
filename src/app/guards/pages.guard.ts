import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate {

  constructor(private authService:AuthService,private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    return ( this.authService.isLoggedIn() ) ? true : this.handleErrorGoPages();
  }

  private handleErrorGoPages(){
    console.log('NO PUDO ENTRAR AL LISTADO')
    this.router.navigateByUrl('/login');
    return false;
  }
  
}
