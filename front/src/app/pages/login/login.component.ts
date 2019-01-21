import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Headers, Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) {
  }


  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this._router.navigateByUrl('');
    }
  }


  public login() {

    const data = 'username=' + this.loginForm.value.username + '&password=' + this.loginForm.value.password;
    localStorage.setItem('username', this.loginForm.value.username);

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('http://localhost/projects/loginservice.php', data, {headers: headers}).subscribe((result) => {
        const obj = JSON.parse(result['_body']);
        localStorage.setItem('token', obj.token);
        location.reload();
      },
      err => {
        alert(JSON.parse(err._body).error);
      }
    );
    this._router.navigateByUrl('/home');
  }

}
