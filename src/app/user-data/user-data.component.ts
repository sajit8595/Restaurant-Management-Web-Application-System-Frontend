import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
parseInt(arg0: any) {
  return parseInt(arg0)
}

  constructor(private userService: UserService, private router: Router) {}

  accessArray = ['No Access', 'Admin', 'Waiter', 'Chef']
  userData = {
    id: '',
    email: '',
    access: '',
    password: ''
  }

  removeId = ''

  users: any;
  
  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.users = result;
      }
    );
  }

  addUser() {
    
    if (this.userData.email === "" || this.userData.password === "" || this.userData.email === undefined || this.userData.password == undefined) {
      alert("Please Enter the user email, user password, user access and then try to add")
      return
    }

    if (this.userData.access === "" || this.userData.access === undefined){
      alert("Give the Access")
      return
    }   

    this.userService.saveUser(this.userData).subscribe(
      (response) => {
        alert("New user with email " + this.userData.email + ", access " + this.accessArray[parseInt(this.userData.access)] + " is Added");
        this.ngOnInit();
      },
      (error) => {
        console.log("error", error)
      }
    );
      


  }

  removeUser() {
    if (this.removeId === "" || this.removeId === undefined){
      alert("Please Enter User ID to remove it")
      return
    }

     if (isNaN(parseInt(this.removeId))){
      alert("Enter a valid User Id")
      return
    }


    this.userService.removeUser(parseInt(this.removeId)).subscribe(() => {
      console.log('Item deleted successfully')
      alert(this.removeId + " User is Removed");
      this.ngOnInit();
    });
  }

}
