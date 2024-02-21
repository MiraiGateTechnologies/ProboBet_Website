import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTA2NyIsImF1ZCI6IjIiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IjIifV0sImlzcyI6IklTU1VFUiIsImlhdCI6MTcwODQ5MzE5NSwiZXhwIjoxNzA5MzU3MTk1fQ.MxPX4LIPG8vsYGPvpf4e5GNmdYyI0XxCxgqjWmd4-GA`;
  const cloneReq =req.clone({
    setHeaders :{
      Authorization: token
    }
  })
  return next(cloneReq);
};
