import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
  showDetails = false;
  detailPhrase = 'Now is the time for all good men to come to the aid of their party';
  clickLog = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    const logDate = new Date();
    this.clickLog.push({
      date: logDate,
      status: this.showDetails === true ? 'show' : 'hide'
    });
  }
}
