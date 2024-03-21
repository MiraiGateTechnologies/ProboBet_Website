import {HttpInterceptorFn} from '@angular/common/http'
import { inject } from '@angular/core';
import {catchError,throwError} from 'rxjs';
import { AuthService} from '../service/auth.service'

export const errorIntercepter:HttpInterceptorFn = (req,next) =>{
  return next(req).pipe(catchError((error:any)=>{
    if([401,403].includes(error.status)){
      const auth = inject(AuthService);
      auth.logOut();
    }
    return throwError(() => error)
  }))
}
