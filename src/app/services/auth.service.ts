import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private STORAGE_TOKEN = 'KEY_CETI'

  constructor() { }

  public isLoggedIn(): boolean{
    //return true
    try{
      const localStorageValue =  localStorage.getItem(this.STORAGE_TOKEN); //! STORAGE TOKEN ME DETERMINA EL TOKEN CUANDO LA PERSONA ESTA LOGUEADA, SI EXISTE ELTOKEN SI ESTA LOGUEADO
      return localStorageValue ? true : false

    }catch(err){
      return false
    }

  }


}
