import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { User } from '../user';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public s:CommonService, private router:Router,private location:Location) { }

  ngOnInit(): void {
  }
  submitdata(p:User)
  {
    this.router.navigate(['user-list'])
    if(p.userid==0)
    {
      this.s.postdata(p).subscribe();
    }
    else
    {
      this.s.updateuser(p).subscribe();
      alert()
    {
      window.location.reload();
    }
    }

  }
}
