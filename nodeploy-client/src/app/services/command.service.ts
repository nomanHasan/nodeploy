import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const COMMAND_URL = `http://localhost:3333/api/commands/`


@Injectable()
export class CommandService {




  constructor(
    private httpClient: HttpClient
  ) { }


  createCommand(projectId, command){
    return this.httpClient.post(COMMAND_URL+projectId, command);
  }

  readCommands(projectId){
    console.log(projectId)
    return this.httpClient.get(COMMAND_URL+projectId);
  }

  updateCommand(projectId, command){
    return this.httpClient.put(COMMAND_URL+projectId, command);
  }

  deleteCommand(projectId, command){
    return this.httpClient.post(COMMAND_URL+projectId+"/pull", command)
  }


}
