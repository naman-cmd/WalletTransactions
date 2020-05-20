import { Component, OnInit } from '@angular/core';
import { WalletTransactionDto } from '../dto/wallet-transaction-dto';
import { TransactionserviceService } from '../services/transactionservice.service';
import { Transaction } from '../Model/transaction';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-findbytransactionid',
  templateUrl: './findbytransactionid.component.html',
  styleUrls: ['./findbytransactionid.component.css']
})
export class FindbytransactionidComponent implements OnInit {
  transaction:Transaction=null;
  show:boolean=false;
  errorShow=false;
  transactions:Array<Transaction>=[];
  __service: TransactionserviceService;

  constructor(__service:TransactionserviceService){
    this.__service=__service;
  }

  ngOnInit(): void {
  }
  getTransaction(searchTransactionForm:any){
    let transactionId=searchTransactionForm.value.transactionId;
    let response:Observable<Transaction>=this.__service.getTransaction(transactionId);
    response.subscribe((transaction:Transaction) =>{
        this.transaction=transaction;
        this.show=true;
        this.errorShow=false;
    },
      error =>{
        this.errorShow=true;
        this.show=false;
        console.log("Error "+error)
        console.log(error.error);
      });
  }

}
