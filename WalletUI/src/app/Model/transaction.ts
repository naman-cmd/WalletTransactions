export class Transaction {

    transactionId:number;
    account : number;
    description:string;
    amount:number;
    transactionTime:Date;
    balance:number;

    constructor(transactionId:number, account:number, description:string, amount:number, transactionTime:Date,  balance:number){
        this.transactionId=transactionId;
        this.account=account;
        this.description=description;
        this.amount=amount;
        this.transactionTime=transactionTime;
        this.balance=balance;
    }
}


