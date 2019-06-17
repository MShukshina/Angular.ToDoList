import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesPageService {

  // paginator = {
  //  filter: '',
  //  numberPage: 1,
  //  countPage: null
  // }

  private inputName = '';
  private numberPage  = {count: '1'};
  private countPage = {count: ''};


  constructor() { }

  getInputName() {
    return this.inputName;
  }

  getNumberPage() {
    return this.numberPage;
  }

  getCountPage() {
    console.log(this.countPage);
    return this.countPage;
  }

  setInputName(inputName: string) {
    this.inputName = inputName;
  }

  setNumberPage(numberPage: string) {
    this.numberPage.count = numberPage;
  }

  setCountPage(countPage: string) {
    this.countPage.count = countPage;
  }

}
