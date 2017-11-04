import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const PROJECT_URL = `http://localhost:3333/api/project`



@Injectable()
export class ProjectService {

  constructor(
    private httpClient: HttpClient
  ) { }



  createProject(project){
    return this.httpClient.post(PROJECT_URL, project);
  }

  getProject(){
    return this.httpClient.get(PROJECT_URL);
  }

  editProject(project){
    return this.httpClient.put(PROJECT_URL, project);
  }

  deleteProject(id){
    return this.httpClient.delete(PROJECT_URL+'/'+id);
  }


}
