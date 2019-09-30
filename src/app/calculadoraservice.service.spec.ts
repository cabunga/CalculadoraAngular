import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CalculadoraserviceService } from './calculadoraservice.service';

describe('CalculadoraserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: CalculadoraserviceService = TestBed.get(CalculadoraserviceService);    
    expect(service).toBeTruthy();
  });
  it('sum 1+2=3', () => {
    const service: CalculadoraserviceService = TestBed.get(CalculadoraserviceService);    
    expect(service.getSum(1,2).subscribe(value=>{
      console.log(value);
      expect(value).toBe('21');
    }))
  });
});
