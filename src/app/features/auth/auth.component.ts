import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  constructor(public auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe({
      next: () => this.route.navigate(['/secret-page']),
    });
  }

  handleConnect(): void {
    this.auth.loginWithRedirect();
  }
}
