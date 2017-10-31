import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  constructor(
    private consoleService: ConsoleService
  ) { }

  logs: Array<string> = [];

  ngOnInit() {
    this.consoleService.messages.subscribe(data => {
      this.logs.push(data.data)
      console.log(data)
      console.log(data.data)
    })

  }

}
