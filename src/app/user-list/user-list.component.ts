import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../shared/common.service';
import { User } from '../user';
import { Location} from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public c:CommonService, private router:Router,private location:Location) { }

  plist!:Observable<User[]>

ngOnInit(): void {
  this.plist=this.c.getdata();
  }


delete(userid:number)
{
  this.c.delete(userid).subscribe();
 alert()
 {
   window.location.reload();
 }
}
edit(p:User)
{
  this.router.navigate(['user'])

  this.c.buttonvalue="update"
  this.c.buttonstatus=true
  this.c.st=Object.assign({},p)
}

}
