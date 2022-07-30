import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //https://rickandmortyapi.com/api/character
  constructor(private http:HttpClient) { } //! INYECCION DE DEPENDENCIAS: Uso metodos de algo que no he creado yo

  getPersonajes(): Observable<any[]> {
    const url:string = 'https://rickandmortyapi.com/api/character';

    return this.http.get(url)
    .pipe(
      map( (todo:any)=> {
        return todo.results
      })
    )
  }

}
