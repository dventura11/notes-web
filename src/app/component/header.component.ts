import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: '../template/header.component.html'
})

export class HeaderComponent {
  isLogged:boolean;
  constructor() {
    this.isLogged=true;
  }
}
