import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { accountDetail } from './account-statement.interface';

@Component({
  selector: 'app-accounts-statement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts-statement.component.html',
  styleUrl: './accounts-statement.component.css'
})
export class AccountsStatementComponent implements OnInit{
  transactions!: accountDetail[];

  constructor(private dataService: AccountService) { }

  ngOnInit(): void {
    this.transactions = this.dataService.generateDummyData();
  }
  goBack(){
    window.history.back()
  }
}
