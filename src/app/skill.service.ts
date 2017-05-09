import { Skill } from './skill';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class SkillService {
  
  private skillsUrl = 'api/skills';

  constructor(private http: Http) { }

  getSkills(): Promise<Skill[]> {
    return this.http.get(this.skillsUrl)
      .toPromise()
      .then(response => response.json().data as Skill[])
      .catch(this.handleError);
  }

  getSkill(id: number): Promise<Skill> {
    const url = `${this.skillsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Skill)
    .catch(this.handleError);
  }
  
  private headers = new Headers({'Content-Type': 'application/json'});

  update(skill: Skill): Promise<Skill> {
    const url = `${this.skillsUrl}/${skill.id}`;
    return this.http
      .put(url, JSON.stringify(skill), {headers: this.headers})
      .toPromise()
      .then(() => skill)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.skillsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Skill> {
    return this.http
      .post(this.skillsUrl,
      JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Skill)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('an error occured', error);
    return Promise.reject(error.message || error);
  }
}
