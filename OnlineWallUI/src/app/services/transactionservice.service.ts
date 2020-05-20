import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WalletTransactionDto } from '../dto/wallet-transaction-dto';
import { Transaction } from '../Model/transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {

  client:HttpClient;
  baseTransactionUrl="http://localhost:8085/transactions";
  transactionList:Array<WalletTransactionDto>=[];
 

    constructor(client:HttpClient) { 
      this.client=client;
     
   }
   getTransactionList(){
    return this.transactionList;
  }
  fetchAllTransactions():Observable<Transaction[]>{
    let url=this. baseTransactionUrl;
    let observable:Observable<Transaction[]> = this.client.get<Transaction[]>(url);
    return observable;
 }

 getTransaction(transactionId:number):Observable<Transaction>{
  let url = this.baseTransactionUrl+"/getbyid/"+transactionId;
  let result:Observable<Transaction> = this.client.get<Transaction>(url);
  return result;
 }
 getAllTransactionsByAccount(account:number):Observable<Transaction[]>{
  let url=this. baseTransactionUrl+"/getbyaccount/"+account;
  let observable:Observable<Transaction[]> = this.client.get<Transaction[]>(url);
  return observable;
}
getAllTransactionsByRecieverId(recieverId:number):Observable<Transaction[]>{
  let url=this. baseTransactionUrl+"/getbyreciever/"+recieverId;
  let observable:Observable<Transaction[]> = this.client.get<Transaction[]>(url);
  return observable;
}

}
