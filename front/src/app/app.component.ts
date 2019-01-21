import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isAuth: boolean;
  public isAdmin: boolean;
  private username = localStorage.getItem('username');

  constructor(private _router: Router) {
  }


  public ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isAuth = true;
      if (localStorage.getItem('username') === 'admin') {
        this.isAdmin = true;
        this._router.navigateByUrl('/users');
      } else {
        this.isAdmin = false;
      }
    } else {
      this.isAuth = false;
      this.isAdmin = false;
      this._router.navigateByUrl('home');
    }
  }


  public logOut() {
    localStorage.removeItem('token');
    this.isAuth = false;
    // location.reload();
    this._router.navigateByUrl('/login');
  }
}
