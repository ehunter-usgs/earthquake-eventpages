import { Component, Input, OnInit } from '@angular/core';

import { ContributorService } from './contributor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() TITLE: string = '';
  @Input() NAVIGATION: any = [];
  @Input() SITE_SITENAV: any = [];
  @Input() SITE_COMMONNAV: any = [];


  constructor (public contributorService: ContributorService) { }

  ngOnInit () {
    this.contributorService.getContributors();
  }
}
