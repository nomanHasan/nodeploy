import { ProjectService } from '../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(
    private projectServie: ProjectService
  ) { }

  projects = [];

  nullProject = {
    name: "",
    description: "",
    path: "",
  };

  newProject  = {
    name: "",
    description: "",
    path: "",
  };

  ngOnInit() {

    this.projectServie.getProject().subscribe(res => {
      console.log(res)
      this.projects = res as Array<any>;
    })

  }

  onSubmit(){
    this.projectServie.createProject(this.newProject).subscribe((res: Response) => {
      console.log(res)
      this.newProject = {
        name: "",
        description: "",
        path: "",
      };
      this.projects.push(res["project"])
    })
    this.newProject = {
      name: "",
      description: "",
      path: "",
    };
  }

  deleteProjcect(id, event){
    event.stopPropagation()
    console.log(id)
    this.projectServie.deleteProject(id).subscribe((res) => {
      console.log(res)
      this.projects = this.projects.filter(p => {
        console.log(id, p._id)
        return p._id != id
      })
    })
  }

}
