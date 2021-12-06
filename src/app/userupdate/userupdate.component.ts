import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  updateForm!: FormGroup;

  constructor(private fb: FormBuilder, private location: Location, public s: CommonService) { }

  ngOnInit(): void {

    this.updateForm = this.fb.group({
      userid:[],
      name:[],
      surname:[],
      pincode:[],
      dob:[],
      joiningDate:[]
    })
    this.editdata();
  }

  editdata()
  {
    let userobj:any = this.location.getState();
    if(userobj.userid!=0)
    {
      this.updateForm.get('userid')?.setValue(userobj.userid);
      this.updateForm.get('username')?.setValue(userobj.username);
      this.updateForm.get('surname')?.setValue(userobj.surname);
      this.updateForm.get('pincode')?.setValue(userobj.pincode);
      this.updateForm.get('dateofbirth')?.setValue(userobj.dateofbirth);
      this.updateForm.get('joiningDate')?.setValue(userobj.joiningDate);
    }
}
submit(){
  this.s.updateuser(this.updateForm.value).subscribe();
}
}
