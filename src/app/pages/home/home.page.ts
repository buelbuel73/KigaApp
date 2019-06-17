import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public isAdmin = false;
  public isTeam = false;

  constructor(
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isAdmin().then(adminStatus => {
      this.isAdmin = adminStatus;
    });

    this.authService.isTeam().then(teamStatus => {
      this.isTeam = teamStatus;
    });
  }

}

