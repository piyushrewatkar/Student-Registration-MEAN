import { Component } from '@angular/core';
import { User } from './models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringAngular';
  public u:User = new User();

  public userData:any;
  showList:boolean = false;

  constructor(){

    
    
  }

  // onSubmit(){
  //   this.integrationService.createUser(this.u)
  //     .subscribe(data =>{ 
  //       console.log(data);
  //       this.userData = [];
  //     this.integrationService.getData().subscribe(data => {
  //       this.userData = data;
  //       console.log(this.userData);
  //     }, error => console.log(error)); 
      
  //     });
  // }
  // onShowList(){
  //   this.integrationService.getData().subscribe(data => {
  //     this.userData = data;
  //     console.log(this.userData);
  //   });
  //   this.showList = true;
  // }


}
