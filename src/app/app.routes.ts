import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountsComponent } from './components/setting/accounts/accounts.component';

import { CricketComponent } from './cricket/cricket.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';


export const routes: Routes = [
  {path:'',component:HeaderComponent},
    {path:'login',pathMatch:'full',component:LoginComponent},
    {path:'register',pathMatch:'full',component:RegisterComponent},
    {path:'verify',pathMatch:'full',component:VerificationComponent},
    { path: 'cricket', loadComponent:() => import('./cricket/cricket.component').then(m => m.CricketComponent)},
    { path: 'football', loadComponent:() => import('./cricket/cricket.component').then(m => m.CricketComponent)},
    { path: 'sportDetails/:matchcode', loadComponent:() => import('./sport-details/sport-details.component').then(m => m.SportDetailsComponent)},
    { path: 'reports',loadChildren:() => import('./components/setting/setting.routing').then(m => m.settingRouters)},
    { path: '**',pathMatch:'full', component: NotFoundComponent },  // Wildcard route for a 404 page

];
