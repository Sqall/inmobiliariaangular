import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  objectKeys = Object.keys;
  lista = {
    'Direccion': 'Av.Falucho 897 - Tandil',
    'Telefono': '(0249)4436672',
    'Cel': '(0249)154-633127'
  };
  constructor() { }

  ngOnInit() {
  }

}

