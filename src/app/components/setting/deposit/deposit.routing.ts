import { Routes } from "@angular/router";
import { UpiComponent } from "./upi/upi.component";


export const deposit: Routes = [
    // {path:'upi',loadComponent:()=>import('./upi/upi.component').then(mod=>mod.UpiComponent)}
  {path:'whatsapp',component:UpiComponent},
  {path:'upi',component:UpiComponent},
  {path:'gpay',component:UpiComponent},
  {path:'paytm',component:UpiComponent},
  {path:'phonepe',component:UpiComponent},
  {path:'qrcode',component:UpiComponent},
  {path:'banktransfer',component:UpiComponent},



]
