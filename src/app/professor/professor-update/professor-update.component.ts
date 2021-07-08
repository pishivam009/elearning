import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Professor } from 'src/app/professor';

@Component({
  selector: 'app-professor-update',
  templateUrl: './professor-update.component.html',
  styleUrls: ['./professor-update.component.css']
})
export class ProfessorUpdateComponent implements OnInit {

  constructor(private http: HttpClient, private apiService: ApiService ) { }

  ngOnInit(): void {
  }

  id: string | null = sessionStorage.getItem("professorId");
  name: string | null = sessionStorage.getItem("professorName");
  email: string | null = sessionStorage.getItem("professorEmail");
  contact: string | null = sessionStorage.getItem("professorContact");
  university: string | null = sessionStorage.getItem("professorUniversity");
  dept: string | null = sessionStorage.getItem("professorDept");


  message: any = "";

  doUpdateProfessor(signupDetails: Professor) {

    if (confirm("Are you sure you want to update the details?")) {
      this.apiService.updateProfessor(signupDetails).subscribe(
        (data) => {
          this.message = data;
        }
      );
    }
  }

}
