import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const PROJECT_URL = `http://localhost:3333/api/project`

@Injectable()
export class CommandService {




  constructor(
    private httpClient: HttpClient
  ) { }

   getProject(){
     return this.httpClient.get(PROJECT_URL);
   }



}
