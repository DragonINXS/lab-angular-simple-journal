import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntriesService {

  constructor(private http: Http) { }



  getAllEntries() {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());
  }

  createAnEntry(arg) {
    
    return this.http.post('http://localhost:3000/api/journal-entries', arg)
    .map((res) => res.json());
  }

}