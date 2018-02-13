import { Component, OnInit } from '@angular/core';

import { ContributorService } from './contributor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  TITLE = 'EventPages';

  // TODO, dynamically build navigation
  NAVIGATION = [
    // {
    //   header: {href: '/ws/geoserve/index.php', display: 'Geoserve Web Services'},
    //   links: [
    //     {href: '/ws/geoserve/places.php', display: 'Places Service'},
    //     {href: '/ws/geoserve/regions.php', display: 'Regions Service'},
    //     {href: '/ws/geoserve/layers.php', display: 'Layers Service'}
    //   ]
    // },
    // {'href': '/', 'display': 'Interactive Interface'}
  ];

  SITE_SITENAV = [
    {href: '/earthquakes/', display: 'Earthquakes'},
    {href: '/hazards/', display: 'Hazards'},
    {href: '/data/', display: 'Data & Products'},
    {href: '/learn/', display: 'Learn'},
    {href: '/monitoring/', display: 'Monitoring'},
    {href: '/research/', display: 'Research'}
  ];

  SITE_COMMONNAV = [
    {href: '/', display: 'Home'},
    {href: '/aboutus/', display: 'About Us'},
    {href: '/contactus/', display: 'Contacts'},
    {href: '/legal.php', display: 'Legal'}
  ];


  constructor (public contributorService: ContributorService) { }

  ngOnInit () {
    this.contributorService.getContributors();
  }
}
