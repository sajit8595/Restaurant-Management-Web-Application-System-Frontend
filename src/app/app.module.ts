import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { BookTableComponent } from './book-table/book-table.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';
import { OrderTableComponent } from './waiter/order-table.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChefComponent } from './chef/chef.component';
import { OrderedListComponent } from './ordered-list/ordered-list.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { ChefStatusComponent } from './chef-status/chef-status.component';
import { UserDataComponent } from './user-data/user-data.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


const appRoute: Routes = [
  { path: '', component: SignupComponent },
  
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', component: UserDataComponent},
      { path: 'book-table', component: BookTableComponent },
      { path: 'edit-menu', component: EditMenuComponent },
      { path: 'generate-payment', component: PaymentComponent }
    ]
  },

  { path: 'waiter', component: OrderTableComponent },

  { path: 'chef', component: ChefComponent }
  
]


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BookTableComponent,
    EditMenuComponent,
    PaymentComponent,
    ShowMenuComponent,
    OrderTableComponent,
    SignupComponent,
    OrderedListComponent,
    ChefComponent,
    ChefStatusComponent,
    UserDataComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    CdkAccordionModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTabsModule,    
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
