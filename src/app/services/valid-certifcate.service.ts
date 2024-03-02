import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidCertifcateService {

  constructor(private http: HttpClient) {}


  getAllData(pagenumber: number, searchQuery: any): Observable<any> {
    // Adjust your API endpoint and parameters accordingly
    return this.http.get(`${environment.baseApi}/LiveValidCertificate?requestNumber=${searchQuery}&pagenumber=${pagenumber}`);
  }
}
