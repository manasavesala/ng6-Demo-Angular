import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DataService]
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}
