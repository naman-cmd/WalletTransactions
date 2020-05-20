import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Model/transaction';
import { TransactionserviceService } from '../services/transactionservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-find-by-account',
  templateUrl: './find-by-account.component.html',
  styleUrls: ['./find-by-account.component.css']
})
export class FindByAccountComponent implements OnInit {
  transaction:Transaction=null;
  show:boolean=false;
  errorShow=false;
  accId:number;
  transactions:Array<Transaction>=[];
  __service: TransactionserviceService;

  constructor(__service:TransactionserviceService){
    this.__service=__service;
  }

  ngOnInit(): void {
  }
  getTransaction(searchTransactionForm:any){
    //let account=searchTransactionForm.value.accId;
    let response:Observable<Transaction[]>=this.__service.getAllTransactionsByAccount(this.accId);
    response.subscribe((transactions:Transaction[]) =>{
        this.transactions=transactions;
        console.log(transactions);
        console.log("naman");
        this.show=true;
        this.errorShow=false;
    },
      error =>{
        this.errorShow=true;
        this.show=false;
        console.log("Error "+error)
      });
      console.log("line1");
      console.log("line2");

  }


}
