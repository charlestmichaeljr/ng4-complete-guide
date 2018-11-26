import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [
    {id: 123, status: 'online'},
    {id: 456, status: 'offline'},
    {id: 789, status: 'offline'},
  ];
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000 );
  }

  onCreateServer() {
    this.servers.push({id: Math.ceil(Math.random() * 20), status: 'online'});
    this.serverCreationStatus = 'Server was created, server name is ' + this.serverName;
    this.serverCreated = true;
  }

}
