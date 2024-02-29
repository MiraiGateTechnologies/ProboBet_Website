import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, tap } from "rxjs";




@Injectable()
export class DataFetchingInteceptor implements HttpInterceptor{
  constructor(private toastr:ToastrService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((event)=>{
      if (event instanceof HttpRequest){
        setTimeout(() => {
            this.handleDataFetchSuccess();
        });
      }
    },
    (error) => {
      if (error instanceof HttpErrorResponse) {
        this.handleDataFetchError(error);
      }
    }
    ))
  }

  private handleDataFetchSuccess() {
    this.toastr.success('Data Fetch Success', 'Success', {
      timeOut: 1000,
    });
  }
  private handleDataFetchError(error: HttpErrorResponse) {
    console.error('Error fetching data:', error);

    if (error.status === 401) {
      this.toastr.error('Unauthorized', 'Error');
    } else {
      this.toastr.error('An error occurred while fetching data.', 'Error', {
        timeOut: 5000,
        // Other ngx-toastr options
      });
    }
  }
}
