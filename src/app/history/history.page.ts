
import { IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../services/service.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  allservices;cust_id1;
  session_data1 = {
    DepartmentId: "",
    DepartmentName: "",
    

  };
  constructor(private router: Router,private http: HttpClient,private storage: Storage,public url: ServiceService) { }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  ionViewWillEnter() {
   
  this.getmember();

      
    
  }
  getmember(){
    this.storage.get('member').then(res => {
      this.cust_id1 = parseInt(res.cust_id);
      this.session_data1.DepartmentId=this.cust_id1;
      this.url.presentLoading()
      this.http
      .post(`${this.url.serverUrl}getmember`, this.session_data1)
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
