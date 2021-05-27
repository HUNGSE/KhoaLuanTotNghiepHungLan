import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  item='DangTin';
  hidden = 'hidden';
  constructor() { }

  ngOnInit(): void {
  }
  changeClassLi(event): void {
    this.item = event.srcElement.id;
  }
  hideItemMenu(): void {
    if (this.hidden === '') {
      this.hidden = 'hidden';
    } else {
      this.hidden = '';
    }
  }
}
