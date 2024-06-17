import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Iuser } from '../Models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL= 'https://jsonplaceholder.typicode.com/users';

  constructor(private _httpClient: HttpClient) { }

  public getAllUsers(): Observable<Iuser[]>{
    return this._httpClient.get<Iuser[]>(this.baseURL);
  } 

  public getUserById(id: number): Observable<Iuser>{
    return this._httpClient.get<Iuser>(`${this.baseURL}/${id}`);
  }

}
