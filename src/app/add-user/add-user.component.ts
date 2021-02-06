import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntegrationService } from '../services/integration-service.service';
import { User } from '../models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router, private intergarionService: IntegrationService) { }

  user: User = new User();
  ngOnInit() {
  }
  createUser(): void {
    this.intergarionService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
