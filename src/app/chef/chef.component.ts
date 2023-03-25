import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import  access from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  access = access;

  orderData: any;
  statusValue: any;


  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    // if (access.login !== 'chef')
    //   this.router.navigate(['']);
      

    this.fetchOrderData();
  }

  fetchOrderData() {
    this.customerService.getAllOrders().subscribe(
      result => {
        this.orderData = result;

      }
    )
  }



}

