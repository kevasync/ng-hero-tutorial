import { Headers } from '@angular/http';

export class Service {
  protected baseUrl = 'http://localhost:5984';
  protected headers = new Headers({'Content-Type': 'application/json'});
  protected allDocs = '_all_docs'
  protected withContent = 'include_docs=true'
  
  protected handleError(error: any): Promise<any> {
    console.error('an error occured', error)
    return Promise.reject(error.message || error)
  }
}