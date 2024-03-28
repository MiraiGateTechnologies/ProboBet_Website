import {HttpInterceptorFn} from '@angular/common/http'
import { inject } from '@angular/core';
import {catchError,throwError} from 'rxjs';
import { AuthService} from '../service/auth.service';
import { Router } from '@angular/router';

export const errorIntercepter:HttpInterceptorFn = (req,next) =>{
  const auth = inject(AuthService);
  const router = inject(Router)
  return next(req).pipe(catchError((error:any)=>{
    if([401,403].includes(error.status)){
      router.navigate(['/login'])
    }
    return throwError(() => error)
  }))
}
