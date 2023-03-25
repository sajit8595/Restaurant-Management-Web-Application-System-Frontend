import { Component, OnInit } from '@angular/core';
import { BookTableService } from '../services/book-table.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  tableData: any;
  customerData: any;
  review: any;

  survey: any = { 'Amazing': 0, 'Good': 0, 'Average': 0, 'Bad': 0 };
  
  constructor(private bookService: BookTableService) { }


  ngOnInit(): void {
    this.fetchTableData();
    this.fetchCustomerData();
  }

  fetchTableData(): void {
    this.bookService.getAllTables().subscribe(
      result => {
        this.tableData = result;
        console.log(this.tableData, result);
      }
    )
  }

  fetchCustomerData(): void {

    this.bookService.getAllCustomers().subscribe(
      result => {
        this.customerData = result;
        console.log(this.customerData)
        this.fetchSurvey();

      }
    )
  }

  fetchSurvey(): void {
    this.survey =  { 'Amazing': 0, 'Good': 0, 'Average': 0, 'Bad': 0 }
    for (let i = 0; i < this.customerData.length; i++) {
      let x = this.customerData[i].review
      this.survey[x] += 1
    }
  }


  generatePayment(id: number) {
    if (this.review === '' || this.review === undefined) {
      alert("Please Review the Food")
      return
    }
    this.bookService.generatePayment(id, this.review).subscribe(
      () => {
        alert("Table ID " + id + " Payment is Generated");
        this.ngOnInit();
      });
    this.review = '';
  }








}
