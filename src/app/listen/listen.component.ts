import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  ende: number = 10
  liste: Array<number> = [1,2];

  constructor() { }

  ngOnInit() {
  }

  zaehle() {
    this.liste = [];

    for(let i = 0; i <= this.ende ;i ++) {
      this.liste.push(i);
    }
  }

}