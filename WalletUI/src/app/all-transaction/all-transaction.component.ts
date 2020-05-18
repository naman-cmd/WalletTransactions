import { Component, OnInit } from '@angular/core';
import { WalletTransactionDto } from '../dto/wallet-transaction-dto';
import { TransactionserviceService } from '../services/transactionservice.service';
import { Transaction } from '../Model/transaction';


@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.component.html',
  styleUrls: ['./all-transaction.component.css']
})
export class AllTransactionComponent implements OnInit {

  transactions:Transaction[]=[];
  __service:TransactionserviceService;
  constructor(__service:TransactionserviceService){
    this.__service=__service;
  }
  ngOnInit(): void {
    this.__service.fetchAllTransactions().subscribe(transaction =>{this.transactions=transaction});
  }

}
