import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Headers, Http} from '@angular/http';
import {ApiService} from '../../services/api.service';


@Component({
    selector: 'app-unos-kalorija',
    templateUrl: './unos-kalorija.component.html',
    styleUrls: ['./unos-kalorija.component.css']
})
export class UnosKalorijaComponent implements OnInit {

    public marke: any = [];

    public markaForm = new FormGroup({
        ime: new FormControl(),
    });


    public unosKalorijaForm = new FormGroup({
        imeNamirnice: new FormControl(),
        kalorijskaVrednost: new FormControl(),
        datum: new FormControl(),
        vreme: new FormControl(),
        marka: new FormControl(),
    });

    constructor(private _http: Http, private _api: ApiService) {
    }

    ngOnInit() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        this._http.get('http://localhost/projects/getmarka.php', {headers: headers}).subscribe(
            data => {
                this.marke = JSON.parse(data['_body']).marke;
            });

    }

    unos_kalorija() {
        const data =
            'imeNamirnice=' + this.unosKalorijaForm.value.marka +
            '&kalorijskaVrednost=' + this.unosKalorijaForm.value.kalorijskaVrednost +
            '&datum=' + this.unosKalorijaForm.value.datum +
            '&vreme=' + this.unosKalorijaForm.value.vreme;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));

        this._http.post('http://localhost/projects/unos_kalorija.php', data, {headers: headers}).subscribe(
            result => {
                console.log('Result: \n' + result.toString());
                location.reload();
            },
            error => {
                console.log('greska; \n' + error.valueOf());
            });
    }

}
