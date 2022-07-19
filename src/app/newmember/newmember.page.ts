import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-newmember',
  templateUrl: './newmember.page.html',
  styleUrls: ['./newmember.page.scss'],
})
export class NewmemberPage implements OnInit {
  cust_id1;
  session_data1 = {
    fname: "",
    lname: "",
    age:"",
    gender:"",
    email:"",
    mid:"",
    dob:"",
    mobile:"",
    address:"",
    photo:"",
    member:"",

  };

  constructor(private router: Router,private http: HttpClient,private storage: Storage,public url: ServiceService) {



   }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  verify_submit(f: NgForm) {

  console.log(f.value.mobile)
    this.storage.get('member').then(res => {
      this.cust_id1 = parseInt(res.cust_id);
      this.session_data1.mid=this.cust_id1;
      this.session_data1.fname=f.value.fname;
      this.session_data1.lname=f.value.lname;
      this.session_data1.age=f.value.age;
      this.session_data1.gender=f.value.gender;
      this.session_data1.dob=f.value.dob;
      this.session_data1.mobile=f.value.mobile;
      this.session_data1.email=f.value.email;
    //  this.session_data1.mid=this.cust_id1;

      if ((f.value != '')) {
        this.url.presentLoading();
       f.value.mid=
        this.http
          .post(`${this.url.serverUrl}addnewmem`, this.session_data1)
          .subscribe(
            (res: any) => {
              console.log(res)
              this.url.dismiss();
              this.url.presentToast("Member Added");
              
             this.router.navigate(['/dashboard']);
              if(res.Name=="200")
              {
               
              }
             
              
             
            },
            (err) => {
            this.url.dismiss();
            // this.loader_visibility = false;
              //this.func.presentToast("Server Error. Please try after some time.");
            }
          );
      }
      else {
        this.url.presentToast("Please Fill All Data.");
      }
    
    });
    

  }

}
