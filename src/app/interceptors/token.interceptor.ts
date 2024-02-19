import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTA2NyIsImF1ZCI6IjIiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IjIifV0sImlzcyI6IklTU1VFUiIsImlhdCI6MTcwODMyOTAwNywiZXhwIjoxNzA5MTkzMDA3fQ.zk7cjtO71aNpD6pLJz6Bxa-_Lju4TDJTnt25u3-NL8o`;
  const cloneReq =req.clone({
    setHeaders :{
      Authorization: token
    }
  })
  return next(cloneReq);
};
