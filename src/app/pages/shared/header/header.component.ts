import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  public nombreUsuarioLogueado: string = ''

  ngOnInit(): void {
    this.nombreUsuarioLogueado = localStorage.getItem('name')!
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

}
