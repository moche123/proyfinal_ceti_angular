import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public charactersObs$: any;

  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.charactersObs$ = this.apiService.getPersonajes()
  }

  public addFavorite(person:any):void {
    let body = {
      IdCharacter: person.id,
      IdUser: localStorage.getItem('userId'),
      nameCharacter: person.name,
      caracterUrlImagen: person.image,
      token: localStorage.getItem('token')
    }

    this.apiService.addFavorite(body).subscribe(ok=>{
      console.log(ok, ' Todo está ok')
      if(ok.ok != false){

        this.router.navigateByUrl('/pages/favorites')
      }
    })
  }

}
