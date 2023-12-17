import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { PetitionsService } from 'src/app/services/petitions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: Array<any> = [];
  
  constructor(private petitions: PetitionsService,private router:Router) {}
  ngOnInit(): void {
  this.gettingUsers();
  }
  
  loginform = new FormGroup({
    mail: new FormControl(''),
    password:new FormControl('')
})
  gettingUsers() {
    this.petitions.getUsers().subscribe({
      next: (users: any) => {
        this.users = users;
      },
      error: (error) => console.error('Error fetching users:', error),
    });
  }
  checkIfUserExists(){
    const enteredMail = this.loginform.get('mail')?.value;
    const enteredPassword = this.loginform.get('password')?.value;

    const userExists = this.users.some(user =>
      user.mail === enteredMail && user.password === enteredPassword
    );
    console.log(userExists);
    

    if(userExists){
      this.router.navigate(['home'])
    }
    else{
      alert('Credenciales Invalidas')
    }
  }
}
