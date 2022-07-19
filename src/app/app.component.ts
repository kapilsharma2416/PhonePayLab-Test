import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fname;
  lname;
  mobile;
filepreview;
  constructor( public url: ServiceService) {
    this.initializeApp();
  }

  initializeApp() {
    // other code

    this.url.getObservable().subscribe((data) => {
        
        this.fname=data.fname;
        this.lname=data.lname;
        this.mobile=data.mobile;
        if(data.photo !="")
        {this.filepreview=data.photo;
          this.filepreview= this.url.imageUrl+this.filepreview;
          //console.log(this.filepreview);
        }
        else
        {
          this.filepreview='assets/user.png';
         // console.log(this.filepreview);
        }
        
    });
}
}
