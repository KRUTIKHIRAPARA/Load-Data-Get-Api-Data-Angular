import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  _loading = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  srsUrl = 'https://jsonplaceholder.typicode.com/photos';

  getData(){
    return this.http.get(this.srsUrl);
  }

  show() {
    document.body.style.pointerEvents='none';
    this._loading.next(true);
  }
  
  hide() {
    document.body.style.pointerEvents='';
    this._loading.next(false);
  }
}
