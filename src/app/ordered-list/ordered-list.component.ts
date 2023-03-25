import { Component, Input } from '@angular/core';
import { BookTableService } from '../services/book-table.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-ordered-list',
  templateUrl: './ordered-list.component.html',
  styleUrls: ['./ordered-list.component.css']
})


export class OrderedListComponent {



  customerData: any = [];
  @Input() customerId: any;
  @Input() show: boolean = false;

  customerHash: any = {};

  custHash: any = [];
  

  menuId: string = '';
  total: number = 0;
  review: string = '';


  constructor(private customerService: CustomerService, private bookService: BookTableService) { }


  ngOnInit(): void {
    this.getCustomerData(this.customerId);
  }

  getCustomerData(id: number) {
      this.total = 0;

    this.customerService.getCustomerById(id).subscribe(result => {
      this.customerData = result;


      for (let i = 0; i < this.customerData.orderList.length; i++) {
        this.total += this.customerData.orderList[i].menuRate;
      }


      this.getHashData();
    })


  }

  getHashData(){
    this.customerHash = {};

    let cd = this.customerData.orderList;
    for (let i=0; i<cd.length; i++){
      let od = cd[i];
      let key = od.menu;
      if (this.customerHash.hasOwnProperty(key)){
        this.customerHash[key].quant += 1
        this.customerHash[key].status = od.status;
      }
      else{
        let value = {'quant': 1, 'menu': od.menu, 'menuId': od.menuId, 'menuRate': od.menuRate, 'status': od.status}
        this.customerHash[key] = value;
      }
    }

    this.custHash = Object.values(this.customerHash)

  // console.log(this.customerHash, 'adfads', cd)

  }



  addOrder() {

    if (this.menuId === "" || this.menuId === undefined){
      alert('Please Enter the Dish ID to Order')
      return
    }

    if (isNaN(parseInt(this.menuId))){
      alert('Please Enter the Valid ID')
      return
    }

    let order = {
      "menuId": this.menuId,
      "customer": {
        "id": this.customerId
      }
    }


    this.customerService.addOrder(order).subscribe(
      (response) => {
        // console.log(response);
        this.ngOnInit();
        alert("New Order is made for Customer ID: " + this.customerId + " name: " + this.customerData.name )
      },
      (error) => {
        alert('Please Enter Valid Dish ID');
        return
      }
    );

  }

  generatePayment(id: number) {
    this.bookService.generatePayment(id, this.review).subscribe(
      () => {
        alert(id + " Table Payment is Generated");
        this.ngOnInit();
      });



  }
}