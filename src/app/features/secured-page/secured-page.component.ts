import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService, LogoutOptions } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-secured-page',
  standalone: true,
  imports: [],
  templateUrl: './secured-page.component.html',
  styleUrl: './secured-page.component.scss',
})
export class SecuredPageComponent implements OnInit {
  currentUser$!: Observable<any>;

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.auth.user$.pipe(tap((u) => console.log(u)));
  }

  handleLogout(): void {
    this.auth.logout({
      returnTo: this.document.location.origin,
    } as LogoutOptions);
  }
}
