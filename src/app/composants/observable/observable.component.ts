import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of , merge, from, timer, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  status = '';
  tab: Array<number> = [];
  subscription: Subscription;

  ngOnInit() {
    //const tableau = [1, 2, 3];
    //const observable: Observable<number> = from(tableau);

    const observable: Observable<number> = timer(3000, 1000);
    observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
