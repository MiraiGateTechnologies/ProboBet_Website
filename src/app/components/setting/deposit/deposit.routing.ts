import { Routes } from "@angular/router";
import { BankTransferComponent } from "../bank-transfer/bank-transfer.component";
import { UpiComponent } from "./upi/upi.component";


export const deposit: Routes = [
    // {path:'upi',loadComponent:()=>import('./upi/upi.component').then(mod=>mod.UpiComponent)}
  {path:'whatsapp',component:UpiComponent},
  {path:'upi',component:UpiComponent},
  {path:'gpay',component:UpiComponent},
  {path:'paytm',component:UpiComponent},
  {path:'phonepe',component:UpiComponent},
  {path:'qrcode',component:UpiComponent},
  {path:'bank-transfer',component:BankTransferComponent},



]
