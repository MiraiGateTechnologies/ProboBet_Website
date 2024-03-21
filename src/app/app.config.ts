import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// import { TokenInterceptor } from './interceptors/auth.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';
// import { LoadingInterceptor } from './interceptors/loading.interceptor';
// import { errorIntercepter } from './interceptors/error.interceptor';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch()), provideToastr(), provideClientHydration(), provideAnimations(),
  provideHttpClient(withInterceptors([tokenInterceptor]))]
};
