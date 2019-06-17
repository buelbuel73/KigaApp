import { Component, OnInit } from '@angular/core';
import { Team, TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  items: Team[];

  constructor( public tippsService: TeamService ) { }

  ngOnInit() {

    this.tippsService.getTeam().subscribe(res => {
      this.items = res;
    });

  }

}
