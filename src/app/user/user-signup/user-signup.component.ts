import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
  }
  

  

  doUserSignup(userData: User){
  this.apiService.userSignup(userData).subscribe(
    data => {
      alert(data);
    }
  );
  }

}
