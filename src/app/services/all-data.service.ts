// all-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  constructor(private http: HttpClient) {}

  getAllData(pagenumber: number, searchQuery: any): Observable<any> {
    // Adjust your API endpoint and parameters accordingly
    return this.http.get(`${environment.baseApi}/LiveAllData?requestNumber=${searchQuery}&pagenumber=${pagenumber}`);
  }
  }
  

