import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ApiService, LocalStorageService } from 'src/app/core';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(ApiService);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);

  login(body: Login):Observable<Login> {
    return this.apiService.store('auth/login', body).pipe(
      tap( (resp: any) => {
        this.localStorageService.saveItem('token', resp.token);
        this.localStorageService.saveItem('username', body.username);
        this.router.navigateByUrl('/app');
      })
    );
  }

  signOut() {
    setTimeout(async () => {
      this.localStorageService.reoveItem('token');
      this.localStorageService.reoveItem('username');
      this.router.navigateByUrl('/');
    }, 2000)
  }

}
