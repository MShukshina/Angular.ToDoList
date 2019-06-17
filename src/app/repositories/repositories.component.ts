import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {map} from 'rxjs/operators';
import {Repositories} from '../Repositories';
import {HttpClient} from '@angular/common/http';
import {RepositoriesService} from '../repositories.service';
import {RepositoriesPageService} from '../repositories-page.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  public repositories: Repositories[];

  public inputName: string;
  public numberPage: { count: string; };
  public countPage: { count: string; };

  public dataRepositories;

  constructor(private http: HttpClient, private serviceRepositories: RepositoriesService, private servicePage: RepositoriesPageService) { }

  ngOnInit() {
    this.repositories = this.serviceRepositories.getRepositories();
    this.inputName = this.servicePage.getInputName();

    this.countPage = this.servicePage.getCountPage();
    this.numberPage = this.servicePage.getNumberPage();
  }

  onInputChange(inputName: string) {
    this.setInputName(inputName);
    if (!this.inputName) {
      this.removeRepositories();
      this.setNumberPage('1');
    } else {
      this.http.get('https://api.github.com/search/repositories?q=' + this.inputName + '&per_page=10&page=' + this.numberPage.count)
        .pipe(
          map((rep: any) => rep.items.map((repository: any) => ({name: repository.name, url: repository.svn_url}),
            this.setCountPage(rep.total_count))
          )
        )
        .subscribe(res => {
          this.dataRepositories = res;
          this.removeRepositories();
          this.addRepositories();
        });
    }
  }

  onPageChange() {
    this.onInputChange(this.inputName);
  }

  removeRepositories() {
    this.serviceRepositories.removeRepositories();
    this.repositories = this.serviceRepositories.getRepositories();
  }

  addRepositories() {
    this.serviceRepositories.addRepositories(this.dataRepositories);
    this.repositories = this.serviceRepositories.getRepositories();
  }

  setInputName(name: string) {
    this.servicePage.setInputName(name);
    this.inputName = this.servicePage.getInputName();
  }

  setNumberPage(numberPage: string) {
    this.servicePage.setNumberPage(numberPage);
    this.numberPage = this.servicePage.getNumberPage();
  }

   setCountPage(count: string) {
    this.servicePage.setCountPage(count);
    this.countPage = this.servicePage.getCountPage();
  }

}
