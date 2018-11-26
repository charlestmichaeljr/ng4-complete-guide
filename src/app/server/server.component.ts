import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() serverID: string;
  @Input() serverStatus: string;
  constructor() { }

  ngOnInit() {
  }

}
