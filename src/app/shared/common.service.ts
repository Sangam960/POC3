import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  buttonvalue:string="submit";
  buttonstatus:boolean=false;


  st:User={

    userid:0,
    name:"",
    surname:"",
    pincode:0,
    dob:"",
    joiningDate:""

  }
  url:string = 'http://localhost:9090/'

  postdata(stu:User)
  {
    return this.http.post("http://localhost:9090/saveuser",stu);
  }

 getdata():Observable<User[]>
 {
   return this.http.get<User[]>("http://localhost:9090/alldata");
 }

getUserByID(userid:number):Observable<User>
  {
    return this.http.get<User>("http://localhost:9090/getUserById"+'/'+userid);
  }
 delete(userid:number):Observable<number>
  {

   return this.http.delete<number>("http://localhost:9090/harddelete"+'/'+userid);
  }


  updateuser(user:User)
  {
    return this.http.put(this.url+"/update", user);

  }
  buttonname:string="submit";
  istrue:boolean=false;

}
