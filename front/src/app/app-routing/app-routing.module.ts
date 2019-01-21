import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {LoginComponent} from '../pages/login/login.component';
import {RegisterComponent} from '../pages/register/register.component';
import {UnosKalorijaComponent} from '../pages/unos-kalorija/unos-kalorija.component';
import {UnosNamirnicaComponent} from '../pages/unos-namirnica/unos-namirnica.component';
import {DnevnikComponent} from '../pages/dnevnik/dnevnik.component';
import {DnevniUnosInsulinaComponent} from '../pages/dnevni-unos-insulina/dnevni-unos-insulina.component';
import {DnevniUnosGlikemijeComponent} from '../pages/dnevni-unos-glikemije/dnevni-unos-glikemije.component';

import {KorisniciComponent} from '../pages/korisnici/korisnici.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'kalorije', component: UnosKalorijaComponent},
    {path: 'namirnice', component: UnosNamirnicaComponent},
    {path: 'dnevnik', component: DnevnikComponent},
    {path: 'users', component: KorisniciComponent},
    {path: 'dzi', component: DnevniUnosInsulinaComponent},
    {path: 'dzg', component: DnevniUnosGlikemijeComponent},


];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
