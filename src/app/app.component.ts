import { Component } from '@angular/core';
import {CalculadoraserviceService} from '../app/calculadoraservice.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  sum:string;
  constructor(private service:CalculadoraserviceService){}
  Sumar(first:number,second:number){
    //this.sum= +first + +second;
  }
  calculate(first:number, second:number) {
    
   this.service.getSum(first,second).subscribe(
      data=>{
        this.sum=data+'';
      },
      err=>{
        console.log(err);
      }
    );
   }
}
