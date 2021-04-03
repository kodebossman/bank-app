import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { DepositAccountComponent } from './account/deposit-account/deposit-account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreateTransactionComponent } from './transactions/create-transaction/create-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CreateAccountComponent,
    DepositAccountComponent,
    TransactionsComponent,
    CreateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
