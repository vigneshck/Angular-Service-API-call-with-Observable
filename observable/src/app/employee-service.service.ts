import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl:any = "http://192.168.2.210:29532/microsvc/tnega_csc_availability_report/";

  constructor(private  http: HttpClient) { }

  getemp(){
    return [

      {"id":1, "name": "vignesh", "age": 26},
      {"id":2, "name": "ck", "age": 27},
      {"id":3, "name": "test", "age": 28},
      {"id":4, "name": "sample", "age": 29}
      
      ];

  }

  getData(data):Observable<any>{
    
    return  this.http.post(this.baseUrl,data);

   }

  
  

}
