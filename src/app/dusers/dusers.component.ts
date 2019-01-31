import { Component, OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dusers',
  templateUrl: './dusers.component.html',
  styleUrls: ['./dusers.component.scss'],
  providers: [FireServiceService ]
})
export class DusersComponent implements OnInit {

  users$: Object;
  
  constructor(private fireService: FireServiceService) { }

  ngOnInit() {
    this.fireService.getUsers().subscribe(
      data => this.users$ = data
    );
  }

  submitForm(name: string, email: string, website: string) {
    var newUser = {
      name: name,
      email: email,
      website: website
    }

    console.log('Adding user:', newUser);
    this.fireService.addUser(newUser);
  }

}
