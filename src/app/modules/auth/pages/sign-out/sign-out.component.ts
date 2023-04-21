import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html'
})
export class SignOutComponent implements OnInit {

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.signOut();
  }

}
