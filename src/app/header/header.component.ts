import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = ['propiedad', 'alquiler', 'campo', 'lote', 'arrendamiento'];

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    // console.log(this.authService.isAuthenticated());
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
