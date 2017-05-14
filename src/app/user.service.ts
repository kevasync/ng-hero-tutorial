import { User } from './user';
import { Service } from './service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService extends Service {
  constructor(private http: Http) { super() }

  update(user: User): void {
    const url = `${this.baseUrl}/user/${user.id}`
    this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError)
  }
}