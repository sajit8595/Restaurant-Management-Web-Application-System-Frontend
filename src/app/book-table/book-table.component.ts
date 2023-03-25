import { Component, OnInit } from '@angular/core';
import { Table } from '../services/book-table.service';
import { BookTableService } from '../services/book-table.service';


@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})


export class BookTableComponent implements OnInit {

  removeId = '';
  addTableData = {
    id: '',
    booked: false,
    orderId: ''
  }


  tableData: Array<Table> = [];

  constructor(private bookService: BookTableService) { }


  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.bookService.getAllTables().subscribe(
      result => {
        this.tableData = result;
      }
    )

  }

  bookTable(id: number, name: string) {
    if (name === "" || name === undefined) {
      alert("Please Enter Customer Name and Book the Table")
      return
    }

    this.bookService.bookTable(id, name).subscribe(
      () => {
        alert("Table with ID " + id + " is booked for Customer name: " + name);
        this.ngOnInit();

      });
  }

  addTable() {
    this.bookService.addTable(this.addTableData).subscribe(
      (response) => {
        alert("New Table is Added");
        this.ngOnInit();
      },
      (error) => {
        console.log("error", error)
      }
    );

  }

  removeTable() {
    if (this.removeId === "" || this.removeId === undefined){
      alert("Please Enter Table ID to remove it")
      return
    }
      
    this.bookService.removeTable(parseInt(this.removeId)).subscribe(() => {
      this.ngOnInit();
      alert("Table with ID " + this.removeId + " has been removed");
    });

  }

  removeAllTables() {

    this.bookService.removeAllTables().subscribe(() => {
      console.log("all tables are deleted")
      alert("All Tables are Removed");
      this.ngOnInit();
    });
  }


}
