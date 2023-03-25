import { Component, OnInit } from '@angular/core';
import  access from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
  access = access;
  constructor(private router: Router) { }


  ngOnInit(){
    // if (access.login !== 'admin')
    //   this.router.navigate(['']);

  }
}
