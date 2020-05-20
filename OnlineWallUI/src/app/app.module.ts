import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTransactionComponent } from './all-transaction/all-transaction.component';
import { FindbytransactionidComponent } from './findbytransactionid/findbytransactionid.component';
import { TransactionserviceService } from './services/transactionservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FindByAccountComponent } from './find-by-account/find-by-account.component';
import { FindByRecieverComponent } from './find-by-reciever/find-by-reciever.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTransactionComponent,
    FindbytransactionidComponent,
    FindByAccountComponent,
    FindByRecieverComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TransactionserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
