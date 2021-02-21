import { Component, Inject, OnInit } from '@angular/core';
import { LOCATION_TOKEN } from '../app.component';
import { environment } from '../environment';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  public name = environment.settings.name;
  public production = environment.settings.production;
  public estaAplicacaoSuportaHttpsEmProducao = false;

  constructor(@Inject(LOCATION_TOKEN) private location: Location) {}


  ngOnInit() {
  }

}
