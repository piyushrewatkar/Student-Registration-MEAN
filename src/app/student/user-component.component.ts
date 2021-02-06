import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { IntegrationService } from '../services/integration-service.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  
  users = new Array();
  
  finaltest:User[];
  constructor(private integrationService : IntegrationService) { }

  ngOnInit() {
    this.integrationService.getData().subscribe(data => {
      data.forEach(element => {
        let user = new User();
          user.id = element._id,
          user.name = element.name,
          user.branch = element.branch
        this.users.push(user);
        console.log(user);
      });
      console.log(this.users);
    });
  }
  deleteUser(user: User): void {
    this.integrationService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
}
