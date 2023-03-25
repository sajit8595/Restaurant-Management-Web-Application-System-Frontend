import { Component } from '@angular/core';
import { Dish, MenuService } from '../services/menu.service';


@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent {

  constructor(private menuService: MenuService){}

  

  dishes: Array<Dish> = [];

  ngOnInit(): void {
      this.fetch();
  }

  fetch(): void{
    this.menuService.getAllMenu().subscribe(
      result => {
        this.dishes = result;
        console.log(this.dishes);
      }
    );
  }



  
}
