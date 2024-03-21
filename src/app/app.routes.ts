import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountsComponent } from './components/setting/accounts/accounts.component';

import { CricketComponent } from './cricket/cricket.component';
import { AuthGuard } from './guard/auth.guard';
import { RedirectIfAuthenticatedGuard } from './guard/RedirectIfAuthenticated.guard';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';


export const routes: Routes = [
    {path:'',canActivate:[AuthGuard],component:HeaderComponent},
    {path:'login',pathMatch:'full',canActivate:[RedirectIfAuthenticatedGuard],component:LoginComponent},
    {path:'register',pathMatch:'full',component:RegisterComponent},
    {path:'verify',pathMatch:'full',component:VerificationComponent},
    { path: 'cricket',canActivate:[AuthGuard], loadComponent:() => import('./cricket/cricket.component').then(m => m.CricketComponent)},
    { path: 'football',canActivate:[AuthGuard], loadComponent:() => import('./cricket/cricket.component').then(m => m.CricketComponent)},
    { path: 'sportDetails/:matchcode',canActivate:[AuthGuard], loadComponent:() => import('./sport-details/sport-details.component').then(m => m.SportDetailsComponent)},
    { path: 'reports',canActivate:[AuthGuard],loadChildren:() => import('./components/setting/setting.routing').then(m => m.settingRouters)},
    { path: '**',pathMatch:'full',component: NotFoundComponent },  // Wildcard route for a 404 page

];
