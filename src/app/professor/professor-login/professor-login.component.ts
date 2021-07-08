import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoginDetails } from 'src/app/login-details';
import { Professor } from 'src/app/professor';

@Component({
  selector: 'app-professor-login',
  templateUrl: './professor-login.component.html',
  styleUrls: ['./professor-login.component.css']
})
export class ProfessorLoginComponent implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  data: Professor = new Professor();
 
  doProfessorLogin(formValue: LoginDetails) {
    this.apiService.professorLogin(formValue).subscribe(
      (val: Professor) => {
        this.data = val;
        console.log(val);

        if (val.id > 0) {

          sessionStorage.setItem("professorId", val.id.toString());
          sessionStorage.setItem("professorName", val.name);
          sessionStorage.setItem("professorEmail", val.email);
          sessionStorage.setItem("professorContact", val.contact);
          sessionStorage.setItem("professorUniversity", val.university);
          sessionStorage.setItem("professorDept", val.dept);
          sessionStorage.setItem("professorIsLoggedIn", 'true');
        
          alert("Login successful");
          this.router.navigate(['../professor/dashboard']);
    
        } else {
          alert("Invalid Credentials");
          this.router.navigate(['../professor']);
        }
    
      }
    );
    

  }

}
