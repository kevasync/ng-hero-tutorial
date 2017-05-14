import { Headers } from '@angular/http';

export class Service {
  protected baseUrl = 'http://localhost:5984';
  protected headers = new Headers({'Content-Type': 'application/json'});
  
  protected handleError(error: any): Promise<any> {
    console.error('an error occured', error)
    return Promise.reject(error.message || error)
  }
}