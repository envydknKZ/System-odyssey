import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
