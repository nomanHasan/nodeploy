import { CommandService } from '../services/command.service';
import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../services/console.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  constructor(
    private consoleService: ConsoleService,
    private commandService: CommandService,
    private route: ActivatedRoute
  ) { }


  newCommand = {
    application:"",
    arguments:""
  };

  logs: Array<string> = [];
  
  projectId;

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.projectId = param["id"]
    })


    this.commandService.readCommands(this.projectId).subscribe(res => {
      console.log(res)
    })

    // this.consoleService.messages.subscribe(data => {
    //   this.logs.push(data.data)
    //   console.log(data)
    //   console.log(data.data)
    // })

  }


  addCommand(){
    this.commandService.createCommand(this.projectId, this.newCommand).subscribe(res => {
      console.log(res)
    })

    this.newCommand = {
      application:"",
      arguments:""
    };
  }

}
