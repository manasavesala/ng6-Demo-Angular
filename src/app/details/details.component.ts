import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [DataService]
})
export class DetailsComponent implements OnInit {

  user$: object;
  constructor(private dataService: DataService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.dataService.getUser(this.user$).subscribe(
      data => this.user$ = data
    );
  }

}