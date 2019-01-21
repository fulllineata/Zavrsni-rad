import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DnevnikService {

  constructor(private _http: HttpClient) { }


  dnevnikNesto(){
    return this._http.get("http://localhost/projects/getDnevnik.php").map(result => result);

  }


}
