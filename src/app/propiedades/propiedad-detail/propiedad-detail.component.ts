import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PropiedadService } from '../../propiedad.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-propiedad-detail',
  templateUrl: './propiedad-detail.component.html',
  styleUrls: ['./propiedad-detail.component.css']
})
export class PropiedadDetailComponent implements OnInit {

  @Input() item;
  @Output() edititem: EventEmitter<string> = new EventEmitter();
  @Output() home: EventEmitter<string> = new EventEmitter();

  listaimagenes: String[];

  constructor(
    private http: PropiedadService,
    private authservice: AuthService,
    private router: Router
    ) {}

  ngOnInit() {

    if (!this.item) {
      this.listaimagenes = new Array();
      this.listaimagenes.push('assets/Images/no-image.png');
    } else {
      if (this.item.imagenes.length === 0) {
        this.listaimagenes = new Array();
        this.listaimagenes.push('assets/Images/no-image.png');
      } else {
        this.listaimagenes = this.item.imagenes;
      }
    }
  }

  onEdit() {
    this.edititem.emit('edit');
  }

  onDelete() {
    this.http.deletePropiedad(this.item._id);
    alert('Propiedad Borrada');
    this.home.emit('home');
  }

  isAuthenticated() {
    return this.authservice.isAuthenticated();
  }

}
