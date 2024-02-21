import {HttpInterceptorFn} from '@angular/common/http'
import {catchError,throwError} from 'rxjs';
import { AuthService} from '../service/auth.service'

export const errorIntercepter:HttpInterceptorFn = (req,next) =>{
  return next(req).pipe(catchError((error:any)=>{
    console.log(error)
    if([401,403].includes(error.status)){
      console.log('Unauthorized Login');
      AuthService.logOut();
    }
    return throwError(() => error)
  }))
}
