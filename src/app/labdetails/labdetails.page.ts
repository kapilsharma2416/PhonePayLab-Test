import { IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../services/service.service';



@Component({
  selector: 'app-labdetails',
  templateUrl: './labdetails.page.html',
  styleUrls: ['./labdetails.page.scss'],
})
export class LabdetailsPage implements OnInit {
  allslider;allservices;
  labname;labopen;labclose;
  address;


  session_data1 = {
    DepartmentId: "",
    DepartmentName: "",
    

  };
  slideOptions11 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,

  };

  // type = 'patient'

  constructor(private router: Router,private route: ActivatedRoute,private http: HttpClient,private storage: Storage,public url: ServiceService) { 
    this.route.queryParams.subscribe((params) => {
      if (params && params.id) {
       
        this.session_data1.DepartmentId = JSON.parse(params.id);
        console.log( this.session_data1.DepartmentId);
      }
    });
  }

  slidesDidLoad11(slides: IonSlides): void {
    slides.startAutoplay();
  }
  ionViewWillEnter() {
    this.get_slider();
    this.getmember();
    

      
    
  }
  ngOnInit() {
    
  }
  get_slider(){
    this.url.presentLoading();
    this.http
    .get(`${this.url.serverUrl}Employee`)
    .subscribe(
      (res: any) => {
        this.url.dismiss();
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
          this.url.dismiss();
          // this.loader_visibility = false;
          //this.func.presentToast("Server Error. Please try after some time.");
        }
      );
  }

  onChange(ev, i) {
    console.log(i);
    // if (ev.detail.checked) this.list[i].value = 1;
    // else this.list[i].value = 0;
  }
  getmember(){
  
   
      this.url.presentLoading();
      this.http
      .post(`${this.url.serverUrl}labservices`, this.session_data1)
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

this.labname=res[0].name;
this.address=res[0].address;
this.labopen=res[0].opening;
this.labclose=res[0].closing;

          }
          
  
        },       
         (err) => {
            this.url.dismiss();
            // this.loader_visibility = false;
            //this.func.presentToast("Server Error. Please try after some time.");
          }
        );
   
    
   
  }

}
