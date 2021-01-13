import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoliService {

  constructor(private httpClient: HttpClient) { 
  }

  public getVoli(): Observable<any> {
    return this.httpClient.get("http://flight.apps.37.187.91.6.nip.io/flights")
  }

  public cancelVolo(id: number): Observable<any> {
    return this.httpClient.put(`http://flight.apps.37.187.91.6.nip.io/flights/${id}/cancel`,{})
  }
}
