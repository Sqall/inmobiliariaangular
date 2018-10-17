import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PropiedadService} from '../propiedad.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})

export class PropiedadesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private propservice: PropiedadService,
              private authService: AuthService
  ) {}

  filtro = ['departamento', 'duplex', 'casa', 'chalet', 'local', 'galpon', 'oficina'];
  urlfilter: string;
  subclassfilter: string;
  subclass: string;
  propiedades = <any>[];
  propiedad = <any>[];
  listItems = true;
  newEdit = false;
  detailMode = false;
  newPropiedad = false;

  ngOnInit() {
    // Navegacion entre Categorias
    this.defaultSearch();

    this.router.events.subscribe(() => {
      this.defaultSearch();
      // console.log('navegacion');
    });

    this.route.params.subscribe(
        (params: Params) => {
          this.urlfilter = params['tipo'];
          // NUEVO HTTP PARA OBTENER GENERALES
          this.propservice.getPropiedades(this.urlfilter).subscribe((response) => {
            if (response) {
              this.propiedades = response;
            }
          });
        }
      );
  }

  getSearch(item: string) {
    this.subclass = item;
    this.listItems = true;
    this.newPropiedad = false;
    this.detailMode = false;
    this.subclassfilter = item;
  }

  // EVENT LISTENING FROM EMITER IN ITEM
  onSelect(index: number) {
    this.detailMode = true;
    this.listItems = false;
    this.newPropiedad = false;
    this.propiedad = this.propiedades[index];
  }

  selectnewPropiedad() {
    this.newPropiedad = true;
    this.detailMode = false;
    this.listItems = false;
  }

  onCancel() {
    this.newPropiedad = false;
    this.detailMode = false;
    this.newEdit = false;
    this.listItems = true;
  }

  defaultSearch() {
    this.listItems = true;
    this.detailMode = false;
    this.newPropiedad = false;
    this.subclass = '';
    this.subclassfilter = 'all';
  }

  onEditProp() {
    this.newPropiedad = true;
    this.newEdit = true;
    this.detailMode = false;
    this.listItems = false;
  }

  onHome() {
    this.onCancel();

  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
