import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Professor } from 'src/app/professor';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  list: Professor[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getProfessorList() {
    this.active = true;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    this.apiService.professorList().subscribe(
      (data) => { this.list = data; }

    );
  }

  doDeleteProfessor(id: number): void {
    if (confirm("Are you sure you want to delete this")) {
      this.apiService.deleteProfessor(id).subscribe((data) => {
        this.getProfessorList();
      });
      


    }
  }

}
