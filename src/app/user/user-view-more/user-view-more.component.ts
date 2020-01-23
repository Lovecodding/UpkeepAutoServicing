import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { user } from '../user';

@Component({
  selector: 'app-user-view-more',
  templateUrl: './user-view-more.component.html',
  styleUrls: ['./user-view-more.component.css']
})
export class UserViewMoreComponent implements OnInit {

    user_id: number;
    email_id: string;
    password: string;
    user_name:string;
    mobile_no: number;
    address: string;
    date_of_birth: Date;
    user_type:string;
  constructor(public dialogref: MatDialogRef<UserViewMoreComponent>, @Inject(MAT_DIALOG_DATA) public data: user) { }

  ngOnInit() {
    this.user_id=this.data.user_id;
    this.email_id=this.data.email_id
    this.password=this.password;
    this.user_name=this.data.user_name;
    this.mobile_no=this.data.mobile_no;
    this.address=this.data.address;
    this.date_of_birth=this.data.date_of_birth;
    this.user_type=this.data.user_type;
  }
  onClickCancel()
  {
    this.dialogref.close();
  }
}