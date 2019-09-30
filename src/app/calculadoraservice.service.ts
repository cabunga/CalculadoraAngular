import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraserviceService {

  constructor(private http:HttpClient) { }
  public getSum(n1,n2):Observable<String>{
    let headers = new Headers();
    let params = new URLSearchParams();
    params.append("num1", n1.toString());
    params.append("num2", n2.toString());
    
  return this.http.get<String>('http://localhost:8080/api/add?num1='+n1+'&num2='+n2+'');
  }
}
