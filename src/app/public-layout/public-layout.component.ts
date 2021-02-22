import { Component, OnInit } from '@angular/core';
import { environment } from '../environment';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit {

  public name = environment.settings.name;
  public production = environment.settings.production;
  public estaAplicacaoSuportaHttpsEmProducao = false;

  constructor() {}

  ngOnInit() {
  }

}
