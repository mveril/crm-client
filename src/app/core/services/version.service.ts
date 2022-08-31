import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private data = new BehaviorSubject(0);
  increment(){
    console.log("increment")
    this.data.next(this.data.value+1);
  }

  subscribe(next: (value: number) => void){
    return this.data.subscribe(next)
  }

  constructor() {
    this.data.subscribe(n=>console.log("Number changed ",n))
  }
}
