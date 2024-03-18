import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { LoadingService } from '../service/loading.service';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  // LoadingService.show();
 return next(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // LoadingService.hide();
          }
        },
        (error) => {
          // LoadingService.hide();
        }
      ))

}
