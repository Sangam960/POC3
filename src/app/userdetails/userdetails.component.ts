import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../shared/common.service';
import { User } from '../user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private routes:ActivatedRoute, private common:CommonService) { }
  userobj!:User


  ngOnInit(): void {
    this.routes.paramMap.subscribe(param1=>
      {
        this.common.getUserByID(parseInt(param1.get('userid')!)).subscribe(
          data=>{
            this.userobj=data;
          }
        )
      })
  }

}
