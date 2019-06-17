import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RepositoriesPageService} from '../../../repositories-page.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Output() pageChange = new EventEmitter<string>();

  public numberPage: { count: string; };

  constructor(private servicePage: RepositoriesPageService) { }

  ngOnInit() {
   this.numberPage = this.servicePage.getNumberPage();
  }

  onChangeCountRepositories(change: boolean) {
    if (change) {
      if (+this.numberPage.count > 1) {
        this.setNumberPage((+this.numberPage.count - 1).toString());
      }
    } else {
      this.setNumberPage((+this.numberPage.count + 1).toString());
    }
    this.pageChange.emit();
  }

  setNumberPage(numberPage: string) {
    this.servicePage.setNumberPage(numberPage);
    this.numberPage = this.servicePage.getNumberPage();
  }
}
