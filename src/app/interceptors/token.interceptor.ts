import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cokiesService =inject(AuthService)
  const myToken = cokiesService.getToken();
  if(req.url.includes('login')){
    return next(req);
  }
  const token = `Bearer ${myToken}`;
  const cloneReq =req.clone({
    setHeaders :{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTA2NyIsImF1ZCI6IjIiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IjIifV0sImlzcyI6IklTU1VFUiIsImlhdCI6MTcxMTYxNTUxMywiZXhwIjoxNzEyNDc5NTEzfQ.B3fWz4F9h-VBNUk9fUeBoB3QPJvpyieSmuFfaOwE-o4'
    }
  })
  return next(cloneReq);
};
