import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Http} from '@angular/http';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  korisnici: any = [];

  constructor(private _http: Http, private router: Router) {
  }

  ngOnInit() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    this._http.get('http://localhost/projects/getUsers.php', {headers: headers}).subscribe(
      data => {
        this.korisnici = JSON.parse(data['_body']).korisnici;
      },
      error => {
        console.log('Error korisnici.component.ts: \n' + error.toString());
      }
    );
  }

  public obrisi_korinsika(id: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    const data = 'id=' + id;

    this._http.post('http://localhost/projects/obirsi_korisnika.php', data, {headers: headers}).subscribe(
      response => {
        console.log(response.toString());
        location.reload();
      },
      error => {
        console.log(error.toString());
      }
    );
  }

}
