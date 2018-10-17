import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../propiedad.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  constructor(
    private propService: PropiedadService,
    private router: Router) { }

  homePropiedades = <any>[];

  ngOnInit() {
    this.propService.getHome().subscribe((response) => {
      this.homePropiedades = response;
    });
  }

  onSelect() {
    this.router.navigate(['/propiedades']);
  }

}
