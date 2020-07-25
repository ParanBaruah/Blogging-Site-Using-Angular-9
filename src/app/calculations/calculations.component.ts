import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  principal: number = undefined;
  rate: number = undefined;
  timeInMonths: number = undefined;
  sum: number = undefined;

  constructor(public addService: AddService) {

   }

   add(){
     this.sum = this.addService.add(this.principal, this.rate, this.timeInMonths);
   }

  ngOnInit(): void {
  }

}
