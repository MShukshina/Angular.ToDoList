import {Component, Input, OnInit} from '@angular/core';
import {RepositoriesService} from '../../repositories.service';
import {Repositories} from '../../Repositories';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public repositories: Repositories[];

  constructor(private serviceRepositories: RepositoriesService) { }

  ngOnInit() {
    this.repositories = this.serviceRepositories.getRepositories();
  }
}
