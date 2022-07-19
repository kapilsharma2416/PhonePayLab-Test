import { HttpClient } from '@angular/common/http';

import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
  contact_no;
  isLoading;
  private fooSubject = new Subject<any>();

  publishSomeData(data: any) {
      this.fooSubject.next(data);
  }

  getObservable(): Subject<any> {
      return this.fooSubject;
  }
  serverUrl = 'https://demonew.ezyemr.com/api/'
  imageUrl = 'http://phonepaylab.webmediaindia.com/Document/'
  constructor(private storage:Storage,private toastCtrl: ToastController,public http: HttpClient,public loadingController: LoadingController) { 

  }
  async  presentToast(str) {
    const toast = await this.toastCtrl.create({
      message: str,
      duration: 3000,
    });
    toast.present();
  }
  async  dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }


  async presentLoading() 
  {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  

  
}





