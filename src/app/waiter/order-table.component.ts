import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookTableService } from '../services/book-table.service';
import access from '../services/auth.service'

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent {

  access = access;
  tableData: any;

  constructor(private bookService: BookTableService, private router: Router) { }


  ngOnInit(): void {
    // if (access.login !== 'waiter')
    //   this.router.navigate(['']);
    this.fetch();
  }

  fetch(): void {
    this.bookService.getAllTables().subscribe(
      result => {
        this.tableData = result;
      }
    )
  }



  
}
