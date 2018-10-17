import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Propiedad } from './propiedades/propiedad.model';
import { AuthService } from './auth/auth.service';

@Injectable()
export class PropiedadService {

  private propiedad: Propiedad;
  private dbUrl = 'http://localhost:3000/propiedades';
  private token;

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {
      this.token = this.authService.getToken();
    }

  getHome() {
    return this.http.get(this.dbUrl).map((response) => {
      return response;
    });
  }

  getPropiedades(categoria: string) {
    return this.http.get(this.dbUrl + '/' + categoria).map((response) => {
      return response;
    });
  }

  newPropiedad(images, form) {
    let imagenes: String[] = new Array();
    let imagenes_id: String[] = new Array();

    this.http.post(this.dbUrl + '/images', images).subscribe((response) => {
      if (response) {
        for (let item in response) {
          if (response[item]) {
            imagenes.push(response[item].url);
            imagenes_id.push(response[item].public_id);
          }
        }
      }
      form['imagenes'] = imagenes;
      form['imagenes_id'] = imagenes_id;
      form['tokenid'] = this.token;
      this.http.post(this.dbUrl, form ).subscribe((finalresponse) => {
        alert(finalresponse);
      });
    });
  }

  editPropiedad(images, form) {
    let imagenes: String[] = new Array();
    let imagenes_id: String[] = new Array();
    if (images.has('images')) {
      this.http.post(this.dbUrl + '/images', images, { headers: new HttpHeaders().set('Authorization', this.token) })
      .subscribe((response) => {
        if (response) {
          for (let item in response) {
            if (response[item]) {
              imagenes.push(response[item].url);
              imagenes_id.push(response[item].public_id);
            }
          }
        }
        form['imagenes'] = imagenes;
        form['imagenes_id'] = imagenes_id;
        form['tokenid'] = this.token;
        this.http.patch(this.dbUrl + '/edit/' + form.id, form, { headers: new HttpHeaders().set('Authorization', this.token) })
          .subscribe((response) => {
            alert(response);
          });
      },
      error => {
        alert(error.error);
      });
    } else {
      form['imagenes'] = imagenes;
      form['imagenes_id'] = imagenes_id;
      this.http.patch(this.dbUrl + '/edit/' + form.id, form, { headers: new HttpHeaders().set('Authorization', this.token) })
      .subscribe((response) => {
        if (response) {
          alert('Done');
        } else {
          alert('error');
        }
      },
      error => alert(error.error));
    }
  }

  deletePropiedad(id) {
    return this.http.delete(this.dbUrl + '/' + id, { headers: new HttpHeaders().set('Authorization', this.token) })
      .subscribe( (response) => {
        return response;
      });
  }

  borrarImagen(imagen) {
    this.http.delete(this.dbUrl + '/imagen/' + imagen, { headers: new HttpHeaders().set('Authorization', this.token) })
    .subscribe((response) => {
      alert('Borrada Correctamente');
    },
    error => {
      alert('Error inesperado');
    });
  }
}
