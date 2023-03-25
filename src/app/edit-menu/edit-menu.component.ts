import { Component, OnInit } from '@angular/core';
import { Dish, MenuService } from '../services/menu.service';



@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }


  dishData = {
    id: '',
    name: '',
    rate: ''
  };

  removeId = '';

  removeName = '';

  dishes: Array<Dish> = [];

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.menuService.getAllMenu().subscribe(
      result => {
        this.dishes = result;
      }
    );
  }

  addDish() {
    
    if (this.dishData.name === "" || this.dishData.rate === "" || this.dishData.name === undefined || this.dishData.rate == undefined) {
      alert("Please Enter the Dish Name and Rate then try to add")
      return
    }

    if (isNaN(parseInt(this.dishData.rate))){
      alert("Enter a valid Rate")
      return
    }

    this.menuService.saveDish(this.dishData).subscribe(
      (response) => {
        alert("New Dish with name " + this.dishData.name + ", rate " + this.dishData.rate + " is Added");
        this.ngOnInit();
      },
      (error) => {
        console.log("error", error)
      }
    );

  }

  removeDish() {
    if (this.removeId === "" || this.removeId === undefined){
      alert("Please Enter Dish ID to remove it")
      return
    }

    this.menuService.removeDish(parseInt(this.removeId)).subscribe(() => {
      console.log('Item deleted successfully')
      alert(this.removeId + " Dish is Removed");
      this.ngOnInit();
    });
  }

  removeAllDish() {
    this.menuService.deleteAllDish().subscribe(() => {
      console.log('All dishes are deleted')
      alert("All Dishes are Removed");
      this.ngOnInit();
    });
  }

  //  removeDishByName(){
  //   this.menuService.removeDishByName(this.removeName).subscribe(() => {
  //     console.log(this.removeName, "is deleted");
  //   });
  //   this.fetch();
  //  }

}
