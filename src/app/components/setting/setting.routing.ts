import { Routes } from "@angular/router";
import { DepositComponent } from "./deposit/deposit.component";


export const settingRouters: Routes = [
  {path:'payment',component:DepositComponent,loadChildren:()=>import('./deposit/deposit.routing').then(mod=>mod.deposit)},
  {path:'withdraw',loadComponent:()=>import('./withdrow/withdrow.component').then(mod=>mod.WithdrowComponent)},
  {path:'changepassword',loadComponent:()=>import('./changepassword/changepassword.component').then(mod=>mod.ChangepasswordComponent)},
  {path:'mybets',loadComponent:()=>import('./my-bets/my-bets.component').then(mod=>mod.MyBetsComponent)},
  {path:'profit-loss',loadComponent:()=>import('./profit-loss/profit-loss.component').then(mod=>mod.ProfitLossComponent)},
  {path:'casino-reports',loadComponent:()=>import('./casino-reports/casino-reports.component').then(mod=>mod.CasinoReportsComponent)},
  {path:'fancy-reports',loadComponent:()=>import('./fancy-reports/fancy-reports.component').then(mod=>mod.FancyReportsComponent)},
  {path:'result',loadComponent:()=>import('./results/results.component').then(mod=>mod.ResultsComponent)},
  {path:'account-statement',loadComponent:()=>import('./accounts-statement/accounts-statement.component').then(mod=>mod.AccountsStatementComponent)},
  {path:'add-remove-bank-statement',loadComponent:()=>import('./add-remove-bank-statement/add-remove-bank-statement.component').then(mod=>mod.AddRemoveBankStatementComponent)},
  {path:'deposit-withdraw-request-history',loadComponent:()=>import('./deposit-withdraw-request-history/deposit-withdraw-request-history.component').then(mod=>mod.DepositWithdrawRequestHistoryComponent)},
  {path:'activity-logs',loadComponent:()=>import('./activity-logs/activity-logs.component').then(mod=>mod.ActivityLogsComponent)},
  {path:'custom-stake',loadComponent:()=>import('./custom-stake-button/custom-stake-button.component').then(mod=>mod.CustomStakeButtonComponent)},
]
