import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor( public router: Router, public authService: AuthService ) { }

  ngOnInit() {
  }

  logOut(): void { this.authService.userLogout().then( () => {
    this.router.navigateByUrl(''); });
    }

}
