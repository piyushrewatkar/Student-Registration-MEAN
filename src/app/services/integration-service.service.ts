import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IntegrationService {
  url = "http://localhost:8080/home";
  constructor(private http: HttpClient) { }
   getData():any{
     return this.http.get(this.url);
   }
   createUser(user: Object): Observable<Object> {
    return this.http.post(this.url, user);
    }
    deleteUser(user: User) {
      return this.http.delete(this.url + "/"+ user.id);
    }
}
