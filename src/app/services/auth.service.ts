import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private STORAGE_TOKEN:string = 'token'
  private USER_ID:string = 'userId';
  private NAME:string = 'name';

  private baseUrl:string= environment.baseUrl;

  private _usuario!:any;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http:HttpClient) { }


  public isLoggedIn(): boolean{
    //return true
    try{
      const localStorageValue =  localStorage.getItem(this.STORAGE_TOKEN); //! STORAGE TOKEN ME DETERMINA EL TOKEN CUANDO LA PERSONA ESTA LOGUEADA, SI EXISTE ELTOKEN SI ESTA LOGUEADO
      return localStorageValue ? true : false

    }catch(err){
      return false
    }

  }
 

  registrarUsuario(name:string,email:string,password:string,rol:number,estado:boolean){

    const url = `${this.baseUrl}auth/new`;
    const body = {name,email,password,rol,estado};
    
    return this.http.post<any>(url,body)
            .pipe(
              tap(({ok,token,uid}) =>{
                // console.log(resp,'Servicio registro');

                if(ok){
                  localStorage.setItem(this.STORAGE_TOKEN,token!)
                  localStorage.setItem(this.USER_ID,uid!)
                  
                }else{
                  localStorage.clear();
                }
              }),
              map(result=>{
                return result.ok
              }),
              catchError(err=>{
                return of(err.error)
              })
            
            ) 

  }

  login(email:string,password:string){
    
    const url   = `${this.baseUrl}auth/`;
    const body  = {email,password};

    return this.http.post<any>(url,body)
      .pipe(
        tap(({ok,token,uid,name}) =>{
          // console.log(resp);
          if(ok){
            localStorage.setItem(this.STORAGE_TOKEN,token!)
            localStorage.setItem(this.USER_ID,uid!)
            localStorage.setItem(this.NAME,name!)
          }else{
            localStorage.clear();
          }
        } ),
        map(resp => resp.ok),
        catchError(err=>{

          return  of(err.error)
        })
      )
  }



    
            
  


}
