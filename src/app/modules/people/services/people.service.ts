import { Injectable } from '@angular/core';
import { ApiService, People } from '../../../core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private apiService:ApiService) { }

  getPeople():Observable<People[]> {
    return this.apiService.getAll('people');
  }

  getOnePeople(people: number):Observable<People> {
    return this.apiService.getById('people',people);
  }
}
