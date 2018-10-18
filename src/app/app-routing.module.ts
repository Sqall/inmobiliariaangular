import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const appRoutes: Routes = [
    // {path: '', redirectTo: '/recipes', pathMatch:'full' },// si fullpath es vacio, con pathMatch
    { path: '', component: HomeComponent},
    { path: 'aboutus', component: AboutusComponent },
    { path: ':tipo', component: PropiedadesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
