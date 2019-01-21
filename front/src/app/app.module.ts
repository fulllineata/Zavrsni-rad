import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {UnosKalorijaComponent} from './pages/unos-kalorija/unos-kalorija.component';
import {UnosNamirnicaComponent} from './pages/unos-namirnica/unos-namirnica.component';
import {DnevnikComponent} from './pages/dnevnik/dnevnik.component';
import {KorisniciComponent} from './pages/korisnici/korisnici.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DnevniUnosInsulinaComponent} from './pages/dnevni-unos-insulina/dnevni-unos-insulina.component';
import {DnevniUnosGlikemijeComponent} from './pages/dnevni-unos-glikemije/dnevni-unos-glikemije.component';
import {
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule
} from '@angular/material';
import {DnevnikService} from './dnevnik.service';
import {SearchPipe} from './pipe/search';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SearchPipe,
        UnosKalorijaComponent,
        UnosNamirnicaComponent,
        DnevnikComponent,
        KorisniciComponent,
        DnevniUnosInsulinaComponent,
        DnevniUnosGlikemijeComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        [BrowserAnimationsModule],
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatOptionModule,
        MatFormFieldModule,

        NgbModule.forRoot()
    ],
    providers: [
        DnevnikService,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
