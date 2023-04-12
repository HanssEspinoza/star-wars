import { Injectable } from '@angular/core';
import { ApiService } from '../../../core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private apiService:ApiService) { }

  getPeople():Observable<any> {
    return this.apiService.getAll('people');
  }

  getOnePeople(people: number):Observable<any> {
    return this.apiService.getById('people',people);
  }
}
