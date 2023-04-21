import { Component, inject, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../core/services';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
})
export class PrincipalComponent implements OnInit {

  public user: string | null = '';

  private localStorageService = inject(LocalStorageService);

  ngOnInit(): void {
    this.user = this.localStorageService.getItem('username');
  }

}
