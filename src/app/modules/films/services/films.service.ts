import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private apiService:ApiService) { }

  getFilms():Observable<any> {
    return this.apiService.getAll('films');
  }

  getFilm(film: number):Observable<any> {
    return this.apiService.getById('films',film);
  }
}
