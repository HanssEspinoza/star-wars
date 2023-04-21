import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, environmentAuth } from 'src/environments/envinmnents';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.api}`;
  private apiUrlAuth = `${environmentAuth.api}`;

  private http = inject(HttpClient);

  getAll(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`);
  }

  getById(path: string, id: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}/${id}`);
  }

  store(path: string, body: any): Observable<any> {
    return this.http.post(`${this.apiUrlAuth}${path}`, body);
  }
}
