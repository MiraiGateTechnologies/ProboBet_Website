import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTA2NyIsImF1ZCI6IjIiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IjIifV0sImlzcyI6IklTU1VFUiIsImlhdCI6MTcxMDgyNjU0MSwiZXhwIjoxNzExNjkwNTQxfQ.D4VY1q-ley5gnlqRNH6NhfmfYDQ-dJFc0-S0R3MYya0`;
  const cloneReq =req.clone({
    setHeaders :{
      Authorization: token
    }
  })
  return next(cloneReq);
};
