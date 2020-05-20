import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTransactionComponent } from './all-transaction/all-transaction.component';
import { FindbytransactionidComponent } from './findbytransactionid/findbytransactionid.component';
import { FindByAccountComponent } from './find-by-account/find-by-account.component';
import { FindByRecieverComponent } from './find-by-reciever/find-by-reciever.component';






const routes: Routes = [{ path: 'alltransaction', component: AllTransactionComponent },
{ path: 'findtransaction', component: FindbytransactionidComponent }, { path: 'findbyaccount', component: FindByAccountComponent },{ path: 'findbyreciever', component: FindByRecieverComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
