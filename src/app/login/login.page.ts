import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  isShown: boolean = true ; 
  isShown1: boolean = false ;
   otp:any;
  type_otp:any;
  contact_no:any;
  cust_id1: any;

  session_data = {
    cust_id: "",
    mobile: "",
    

  };
  constructor(private router: Router,private http: HttpClient,private storage: Storage,public url: ServiceService) { }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  verify_submit(f: NgForm){
  console.log(f.value)
    let text = f.value.a
    this.type_otp = parseInt(text);
    if((f.value.a != '') )
    {
      if(this.type_otp == this.otp){

        if ((this.contact_no != '')) {
          //alert(f.value.contact_no);
          f.value.contact_no=this.contact_no;
          this.url.presentLoading();
          this.http
            .post(`${this.url.serverUrl}addmember`, f.value)
            .subscribe(
              (res: any) => {
              console.log(res)
               // if(res.Name=="200")
                {
                  
                  this.session_data['cust_id'] = res.Id;
                  this.session_data['mobile'] = res.Name;
                  this.storage.set('member', this.session_data);
                  console.log(this.storage.get('member'));

                  this.storage.get('member').then(res => {
                    this.cust_id1 = parseInt(res.cust_id)+1;
                console.log(this.cust_id1);
                  });
                }
                this.url.dismiss();
                this.router.navigate(['/dashboard']);
               
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
     

      }
      else{
        f.resetForm();
        this.router.navigate(['/login']);
        this.url.presentToast("Invalid OTP.");
      }
    }
    else
    {
      this.router.navigate(['/login']);
      this.url.presentToast("Please Fill All Data.");
    }
   
  }
  // ionViewWillEnter() {
  //   this.storage.get('member').then(res => {
  //     this.cust_id1 = parseInt(res.cust_id)+1;
  // if(this.cust_id1 !="" && this.cust_id1 !="undefined" && this.cust_id1 !=undefined)
  // {
  //  this.router.navigate(['/dashboard']);

  // }
  //   });
  // }

  move($event,p,c,n)
  {
    var length = c.value.length;
   // var maxlength = c.getAttribute('maxlength');
    // if(length>1)
    if (length == 1) {
      if (n != "")
        //this.isDisable = false;
      n.focus();
    }
    else if (length > 1) {
     // this.isDisable = true;
    }
  }
  login_submit(f: NgForm) {
    //console.log(f.value.contact_no)

    if ((f.value.contact_no != '')) {
      this.url.presentLoading();
      this.contact_no=f.value.contact_no;
      this.http
        .post(`${this.url.serverUrl}Employee`, f.value)
        .subscribe(
          (res: any) => {
            console.log(res)
            if(res.Name=="200")
            {
              this.isShown=false;
              this.isShown1=true;
this.otp=res.Id;
            }
            this.url.dismiss();
            
           
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

  }

}
