import { Skill } from './skill';
import { Service } from './service';
import { DbResponse } from './record';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SkillService extends Service {
  constructor(private http: Http) { super() }

  get(): Promise<Skill[]> {
    return this.http.get(`${this.baseUrl}/skill/_all_docs?include_docs=true`)
      .toPromise()
      .then(response => {
        let r = response.json() as DbResponse<Skill>
        return r.rows.map(r => r.doc)
      })
      .catch(this.handleError)
  }
}