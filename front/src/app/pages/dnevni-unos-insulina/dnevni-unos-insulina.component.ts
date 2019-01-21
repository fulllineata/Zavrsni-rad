import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Headers, Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dnevni-unos-insulina',
  templateUrl: './dnevni-unos-insulina.component.html',
  styleUrls: ['./dnevni-unos-insulina.component.css']
})
export class DnevniUnosInsulinaComponent implements OnInit {

  tipoviInsulina = ['Brzodelujuci', 'Sporo delujuci'];

  public dnevniUnosInsulinaForm = new FormGroup({
    vremeDatumUnosa: new FormControl(),
    vrednostInsulina: new FormControl(),
    vrstaInsulina: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) {
  }

  ngOnInit() {
  }

  dnevni_unos_insulina() {
    const data =
      'vrstaInsulina=' + this.dnevniUnosInsulinaForm.value.vrstaInsulina +
      '&vrednostInsulina=' + this.dnevniUnosInsulinaForm.value.vrednostInsulina +
      '&vremeDatumUnosa=' + this.dnevniUnosInsulinaForm.value.vremeDatumUnosa;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    this._http.post('http://localhost/projects/dnevni_unos_insulina.php', data, {headers: headers}).subscribe(
      (result) => {
        console.log('Result: \n' + result.toString());
        // location.reload();
      },
      (error) => {
        console.log('Error; \n' + error.toString());
      });
  }

}
