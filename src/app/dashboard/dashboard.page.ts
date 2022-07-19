
import { IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../services/service.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
  slider: any;
  allservices;
  allslider;
  allmember;
  cust_id1;subscription:any;
  session_data1 = {
    DepartmentId: "",
    DepartmentName: "",
    

  };
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  slideOptions11 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,

  };
  constructor(public platform:Platform,private router: Router,private http: HttpClient,private storage: Storage,public url: ServiceService) {
    this.subscription = this.platform.backButton.subscribeWithPriority(
      -1,
      () => {
        // tslint:disable-next-line: triple-equals
        if (this.constructor.name == "DashboardPage") {
          if(window.confirm("Do you want to exit the app")){
            navigator['app'].exitApp();
          }
          
        } else {
          return;
        }
      }
      
    );


   }
  slidesDidLoad1(slides: IonSlides): void {
    slides.startAutoplay();
  }
  slidesDidLoad11(slides: IonSlides): void {
    slides.startAutoplay();
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  ionViewWillEnter() {
    this.url.presentLoading();
    this.get_service();
    this.get_slider();
  this.getmember();
  this.url.dismiss();
      
    
  }
  ionViewWillLeave() {
   
  }
  get_slider(){
   
    this.http
    .get(`${this.url.serverUrl}Employee`)
    .subscribe(
      (res: any) => {
       
        if(res == 0)
        {
          this.url.presentToast("You Have no Slider.");
        }
        else{
        this.allslider = res;
          //console.log(this.all_history.ride_data)

        }
        

      },       
       (err) => {
        
          // this.loader_visibility = false;
          //this.func.presentToast("Server Error. Please try after some time.");
        }
      );
  }
  getmember(){
    this.storage.get('member').then(res => {
      this.cust_id1 = parseInt(res.cust_id);
      this.session_data1.DepartmentId=this.cust_id1;
      
      this.http
      .post(`${this.url.serverUrl}getmember`, this.session_data1)
      .subscribe(
        (res: any) => {
         
          console.log(res);
          if(res == 0)
          {
            this.url.presentToast("");
          }
          else{
          this.allmember = res;
          this.url.publishSomeData({
            fname: res[0].fname,
            lname:res[0].lname,
            mobile:res[0].mobile,
            photo:res[0].photo,
        });
            //console.log(this.all_history.ride_data)
  
          }
          
  
        },       
         (err) => {
           
            // this.loader_visibility = false;
            //this.func.presentToast("Server Error. Please try after some time.");
          }
        );
    });
    
   
  }
  get_service(){
   
    this.http
    .get(`${this.url.serverUrl}addmember`)
    .subscribe(
      (res: any) => {
       
        if(res == 0)
        {
          this.url.presentToast("You Have no services.");
        }
        else{
        this.allservices = res;
          //console.log(this.all_history.ride_data)

        }
        

      },       
       (err) => {
     
          // this.loader_visibility = false;
          //this.func.presentToast("Server Error. Please try after some time.");
        }
      );
  }

}
