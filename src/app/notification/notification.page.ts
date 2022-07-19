import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  allservices;
  cust_id1;
  filepreview;
  session_data1 = {
    DepartmentId: "",
    DepartmentName: "",
    

  };
  constructor(private router: Router,private route: ActivatedRoute,private http: HttpClient,private storage: Storage,public url: ServiceService) { }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    this.getmember();
  }
  deletenoti
  (del)
  {
    {
      this.storage.get('member').then(res => {
        this.cust_id1 = parseInt(res.cust_id);
        this.session_data1.DepartmentId=del;
        this.url.presentLoading()
        this.http
        .post(`${this.url.serverUrl}deletenotification`, this.session_data1)
        .subscribe(
          (res: any) => {
            this.url.dismiss();
            console.log(res);
            if(res == "delete")
            {
              this.url.presentToast("Notification Deleted");
              this.url.dismiss();
              this.getmember();
            }
            else{
            
           
            }
            
    
          },       
           (err) => {
              this.url.dismiss();
              // this.loader_visibility = false;
              //this.func.presentToast("Server Error. Please try after some time.");
            }
          );
      });
      
     
    }
  }
  getmember(){
    this.storage.get('member').then(res => {
      this.cust_id1 = parseInt(res.cust_id);
      this.session_data1.DepartmentId=this.cust_id1;
      this.url.presentLoading()
      this.http
      .post(`${this.url.serverUrl}getnotification`, this.session_data1)
      .subscribe(
        (res: any) => {
          this.url.dismiss();
          console.log(res);
          if(res == 0)
          {
            this.url.presentToast("");
          }
          else{
          this.allservices = res;
         
          }
          
  
        },       
         (err) => {
            this.url.dismiss();
            // this.loader_visibility = false;
            //this.func.presentToast("Server Error. Please try after some time.");
          }
        );
    });
    
   
  }
}
