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

  constructor(private apiService:ApiService,private router:Router) { }
  ngOnInit(): void {
    this.favoritesObs$ = this.apiService.getFavorites()
    // .subscribe(res => console.log(res))
  }

  back(){
    this.router.navigateByUrl('/pages')
  }

  public removeFavorite(favorite:any){

  }

}
