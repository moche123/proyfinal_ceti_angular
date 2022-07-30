import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public charactersObs$: any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.charactersObs$ = this.apiService.getPersonajes()
  }

}
