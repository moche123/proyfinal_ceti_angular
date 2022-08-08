import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favoritesObs$: any;
  paso:any;

  constructor(private apiService:ApiService,private router:Router) { }
  ngOnInit(): void {
    this.favoritesObs$ = this.apiService.getFavorites()
    // .subscribe(res => console.log(res))
  }

  back(){
    this.router.navigateByUrl('/pages')
  }

  public removeFavorite(favorite:any){
    console.log(favorite.IdCharacter);
    this.apiService.deleteFavorite(favorite.IdCharacter, favorite.IdUser).subscribe(resultado=>{
    
      this.favoritesObs$ = this.apiService.getFavorites()
      // window.alert(resultado.msg)
    })

  }

}
