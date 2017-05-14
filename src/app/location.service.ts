import { Location } from './location';
import { Service } from './service';
import { DbResponse } from './record';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService extends Service {
  constructor(private http: Http) { super() }

  get(): Promise<Location[]> {
    return this.http.get(`${this.baseUrl}/location/${this.allDocs}?${this.withContent}`)
      .toPromise()
      .then(response => {
        let r = response.json() as DbResponse<Location>
        return r.rows.map(r => r.doc)
      })
      .catch(this.handleError)
  }
}