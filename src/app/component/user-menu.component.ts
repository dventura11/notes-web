import { Component } from '@angular/core';

@Component({
  selector: 'user-menu',
  templateUrl: '../template/user-menu.component.html'
})

export class UserMenuComponent {
  userName:string;
  constructor() {
    this.userName = "Diego Ventura"
  }
}
