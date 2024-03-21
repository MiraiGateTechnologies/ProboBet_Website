import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../../service/account.service';
import { AccountDetails,Transaction } from '../accounts-statement/account-statement.interface';
@Component({
  selector: 'app-accounts-statement',
  standalone: true,
  imports: [CommonModule,NgbPaginationModule],
  templateUrl: './accounts-statement.component.html',
  styleUrl: './accounts-statement.component.css'
})
export class AccountsStatementComponent implements OnInit{
  transactions:Transaction[] = [];
  page=0;
  totalElements=0;
  constructor(private accountService:AccountService) {

  }

  ngOnInit(): void {
    this.accountService.getAccountDetails(this.page).subscribe({
      next:(res)=>{
        this.transactions = res.list;
        this.totalElements = res.totalElements;
        this.page = res.currentPage;
        console.log(res);
      },error:(e)=>{
        console.log(e)
      }
    })
    // this.transactions = this.dataService.generateDummyData();
  }
  goBack(){
    window.history.back()
  }
}
