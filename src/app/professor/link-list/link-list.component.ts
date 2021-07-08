import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Link } from 'src/app/link';
import { User } from 'src/app/user';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  list: Link[] = [];
  active: boolean = false;
  refreshedOn: string = "";
  getLinkList() {
    this.active = true;
    this.refreshedOn = Date.now().toString();
    this.list=[];
    this.apiService.linkList().subscribe(
      (data) => { this.list = data; }

    );
  }

  doDeleteLink(id: number): void {
    if (confirm("Are you sure you want to delete this")) {
      this.apiService.deleteLink(id).subscribe((data) => {
        this.getLinkList();
      });
      


    }
  }

}
