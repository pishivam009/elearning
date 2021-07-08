import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Professor } from 'src/app/professor';

@Component({
  selector: 'app-professor-signup',
  templateUrl: './professor-signup.component.html',
  styleUrls: ['./professor-signup.component.css']
})
export class ProfessorSignupComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

 

  doProfessorSignup(userData: Professor){
    this.apiService.professorSignup(userData).subscribe(
      data => {
        alert(data);
      }
    );
    }

}
