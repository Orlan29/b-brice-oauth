import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SecuredPageComponent } from './secured-page/secured-page.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  {
    path: 'secret-page',
    component: SecuredPageComponent,
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

export default routes;
