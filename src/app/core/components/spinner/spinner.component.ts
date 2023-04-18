import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from '../../services';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="overlay" *ngIf="isLoading$ | async"><div class="lds-ripple"><div></div><div></div></div></div>',
  styleUrls: ['./spinner.compoent.scss']
})
export class SpinnerComponent {
  private spinnerService = inject(SpinnerService);

  isLoading$ = this.spinnerService.isLoading$;
}
