import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1: number;
  num2: number;
  res: number;

  sum() {
    this.res = this.num1 + this.num2;

  }

  diff() {
    this.res = this.num1 - this.num2;

  }
  
  mult() {
    this.res = this.num1 * this.num2;

  }

  div() {
    this.res = this.num1 / this.num2;

  }
  
}
