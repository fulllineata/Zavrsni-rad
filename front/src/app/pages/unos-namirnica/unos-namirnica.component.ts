import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Headers, Http} from '@angular/http';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-unos-namirnica',
  templateUrl: './unos-namirnica.component.html',
  styleUrls: ['./unos-namirnica.component.css']
})
export class UnosNamirnicaComponent implements OnInit {
    public unosKalorijaForm = new FormGroup({
    imeNamirnice: new FormControl(),
    kalorijskaVrednost: new FormControl(),

  });

  constructor(private _http: Http, private _api: ApiService) {
  }

  ngOnInit() {
  }


  unos_kalorija() {
    const data =
      'imeNamirnice=' + this.unosKalorijaForm.value.imeNamirnice +
      '&kalorijskaVrednost=' + this.unosKalorijaForm.value.kalorijskaVrednost;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    this._http.post('http://localhost/projects/unos_namirnica.php', data, {headers: headers}).subscribe(
      result => {
        console.log('Result: \n' + result.toString());
        location.reload();
      },
      error => {
        console.log('greska; \n' + error.valueOf());
      });
  }

}
