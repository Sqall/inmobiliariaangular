import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
    token: string = null;
    constructor(private router: Router) {
      if (localStorage.getItem('logintoken') != null) {
        /*firebase.auth().currentUser.getIdToken().then((tokenr: string) => {
          this.token = tokenr;
        });*/
        this.token = localStorage.getItem('logintoken');
      }
    }

    signinUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (tokenr: string) => {
                      localStorage.setItem('logintoken', tokenr);
                      alert('Logeado Correctamente');
                      this.token = tokenr;
                    }
                );
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    logout() {
        // LOGUT POST
        this.token = null;
        localStorage.removeItem('logintoken');
        this.router.navigate(['/']);
    }

    getToken() {
        // GET TOKEN FROM LOGIN
        // PELIGRO DE TOKEN EXPIRADO, TENER EN CUENTA
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
