import { Component, Input } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-chef-status',
  templateUrl: './chef-status.component.html',
  styleUrls: ['./chef-status.component.css']
})
export class ChefStatusComponent {

  @Input() order: any;



  constructor(private customerService: CustomerService) {}

  changeStatus(){
    this.customerService.statusChange(this.order.id, this.order.status).subscribe(
      result => {
        this.order = result;
      }
    )
  }


}
