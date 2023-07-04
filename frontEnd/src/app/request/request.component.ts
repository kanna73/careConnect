import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  role: string = localStorage.getItem('role') || '';

  constructor(private router:Router)
  {
  }

  logOutPage(){

    localStorage.removeItem("token");
      localStorage.removeItem("role");
    this.router.navigate(['logIN']);
  }
}
