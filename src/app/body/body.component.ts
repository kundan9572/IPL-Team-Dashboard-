import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  teamName: String[] = [
    'Chennai Super kings',
    'Mumbai Indians',
    'Rajasthan Royals',
    'Delhi Capitals',
    'Royal Challengers Bangalore',
    'Kolkata Knight Riders',
    'Kings XI Punjab',
    'Sunrisers Hyderabad',
  ];

  website: String[] = [
    'https//www.chennaisuperkings.com/',
    'https//www.mumbaiindians.com/',
    'https//www.rajasthanroyals.com/',
    'https//www.delhicapitals.com/',
    'https//www.royalchallengerbangalore.com/',
    'https//www.kolkataknightriders.com/',
    'https//www.kingsxipunjab.com/',
    'https//www.sunrisershyderabad.com/',
  ];

  phoneNumber: String[] = [
    '023-784-5462x9867',
    '076-324-5672x9367',
    '123-084-5011x2267',
    '923-089-9962x9861',
    '978-114-9902x0067',
    '021-144-1232x9002',
    '021-094-5411x9989',
    '103-234-5222x8869',
  ];

  image: String[] = [
    '../../assets/CSK.png',
    '../../assets/MI.png',
    '../../assets/RR.png',
    '../../assets/Delhi.png',
    '../../assets/RCB.png',
    '../../assets/KKR.png',
    '../../assets/KXI.png',
    '../../assets/SRH.png',
  ];
}
