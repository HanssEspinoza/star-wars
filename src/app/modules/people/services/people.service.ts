import { Injectable, inject } from '@angular/core';
import { AllPeople, ApiService, People } from '../../../core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiService = inject(ApiService);

  getPeople():Observable<AllPeople> {
    return this.apiService.getAll('people');
  }

  getOnePeople(people: number):Observable<People> {
    return this.apiService.getById('people',people);
  }
}
