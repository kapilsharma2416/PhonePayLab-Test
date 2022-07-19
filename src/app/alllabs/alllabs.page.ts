
import { IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../services/service.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-alllabs',
  templateUrl: './alllabs.page.html',
  styleUrls: ['./alllabs.page.scss'],
})
export class AlllabsPage implements OnInit {

 // router: any;
  switchTab = 'local'
  allservices;
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  labs = [
    {
      name: 'Sai Lab',
      image: 'assets/lab1.jpg',
      link: 'labdetails',
      available: true,
    },
    {
      name: 'Kishana Lab',
      image: 'assets/lab2.jpg',
      link: 'labdetails',
      available: true,
    },
    {
      name: 'Phone pay Lab',
      image: 'assets/lab3.jpg',
      link: 'contractorservices',
    },
    {
      name: 'Dinesh Lab ',
      image: 'assets/lab4.jpg',
      link: 'labdetails',
    },
    {
      name: 'Purna Lab',
      image: 'assets/lab3.jpg',
      link: 'contractorservices',
    },
    {
      name: 'SaiKrupa Lab ',
      image: 'assets/lab4.jpg',
      link: 'labdetails',
    },
  ]
  constructor(private router: Router,private http: HttpClient,private storage: Storage,public url: ServiceService) { }
  ionViewWillEnter() {
 
    this.get_slider();
 

      
    
  }
  navigatewith(adc)
  {
   
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(adc),
      },
    };
    this.router.navigate(['labdetails'], navigationExtras);

  }
  get_slider(){
    this.url.presentLoading()
    this.http
    .get(`${this.url.serverUrl}addnewmem`)
    .subscribe(
      (res: any) => {
        this.url.dismiss();
        if(res == 0)
        {
          this.url.presentToast("You Have no Labs added.");
        }
        else{
        this.allservices = res;
          //console.log(this.all_history.ride_data)

        }
        

      },       
       (err) => {
          this.url.dismiss();
          // this.loader_visibility = false;
          //this.func.presentToast("Server Error. Please try after some time.");
        }
      );
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  navigate(labs) {

    this.router.navigate(['/' + labs.link])
  }

}
