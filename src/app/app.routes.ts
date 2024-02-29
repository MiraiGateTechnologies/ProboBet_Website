import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountsComponent } from './components/setting/accounts/accounts.component';
import { SliderComponent } from './components/slider/slider.component';
import { CricketComponent } from './cricket/cricket.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  {path:'login',pathMatch:'full',component:LoginComponent},
    {path:'',component:SliderComponent},

    { path: 'cricket', loadComponent:() => import('./cricket/cricket.component').then(m => m.CricketComponent)},
    { path: 'football', loadComponent:() => import('./cricket/cricket.component').then(m => m.CricketComponent)},
    { path: 'sportDetails/:matchcode', loadComponent:() => import('./sport-details/sport-details.component').then(m => m.SportDetailsComponent)},
    { path: 'reports',loadChildren:() => import('./components/setting/setting.routing').then(m => m.settingRouters)},
    { path: '**',pathMatch:'full', component: NotFoundComponent },  // Wildcard route for a 404 page

];
