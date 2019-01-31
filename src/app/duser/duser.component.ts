import { Component, Input,OnInit } from '@angular/core';
import { FireServiceService } from '../fire-service.service'; 
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-duser',
  templateUrl: './duser.component.html',
  styleUrls: ['./duser.component.scss'],
  providers: [FireServiceService]
})
export class DuserComponent implements OnInit {
  @Input() user;
  userKey$: string;
  user$: Object;

  constructor(private fireService: FireServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userKey$ = params.key);
   }

  ngOnInit() {
    this.fireService.getUser(this.userKey$).subscribe(
      data => this.user$ = data
    );
  }

  beginUpdatingUser(userToUpdate: Object){
    console.log(userToUpdate);
    this.fireService.updateUser(userToUpdate);
  }
  beginDeletingAlbum(userKeyDelete: String){
    console.log(userKeyDelete);
    this.fireService.deleteUser(userKeyDelete);
  }

}
