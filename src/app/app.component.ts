import { HttpClient } from '@angular/common/http';
import { FactoryTarget } from '@angular/compiler';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subject, Subscription, from, interval, map, of, pipe, take } from 'rxjs';
import * as rxjs from "rxjs";
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buttonlock';

  constructor(private loader:LoadingService){}


  isLoader: Subject<boolean> = this.loader._loading;

  isDoubleClick: boolean = false;
  obs: any;

  test(){
    console.log('hello wolrd');
  }
  onDoubleClick() {
    if (!this.isDoubleClick) {
      console.log('execute start');
      this.isDoubleClick = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          console.log(i);
        }
        this.isDoubleClick = false;
        console.log('execute End');
      }, 3000);
    }
  }

  secondBtn: boolean = false;

  secondMethod() {
    if (!this.secondBtn) {
      console.log('execute start');
      this.secondBtn = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          console.log(i);
        }
        this.secondBtn = false;
        console.log('execute End');
      }, 3000);
    }
  }



  thirdMethod(event: any) {
    event.target.disabled = true;
    setTimeout(() => {
      from([50, 15, 20, 30, 40])
        .pipe(
          map(item => item * 2)
        )
        .subscribe(
          item => console.log(`Resulting item...${item}`),
          err => console.log(`Error Ocurred ${err}`),
          () => console.log(`Completed`)
        )
      event.target.disabled = false;
    }, 2000)
  }


  fourthMethod() {

    setTimeout(() => {
      from([50, 15, 20, 30, 40])
        .pipe(
          take(2)
        )
        .subscribe(
          item => console.log(`Resulting item...${item}`),
          err => console.log(`Error Ocurred ${err}`),
          () => console.log(`Completed`)
        )
    }, 2000)

  }


}

