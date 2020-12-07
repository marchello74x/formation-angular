import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  url: string = "http://localhost:5555/personnes/";

  constructor(private http: HttpClient) {}

   getAll() {
     return this.http.get<Array<Personne>>(this.url);
   }

   addPerson(p: Personne) {
     return this.http.post(this.url, p)
   }

   deletePerson(id: number) : Observable<any> {
    return this.http.delete(this.url + id);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.url + id)
  }

  update(id: number, data: Personne): Observable<any> {
    return this.http.put(this.url + id, data)
  }
}
