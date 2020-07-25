import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() {

  }
  add(principal: number, rate: number, timeInMonths: number){
    return (principal * rate * (timeInMonths/12))/100;
  }
}
