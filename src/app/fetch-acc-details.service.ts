import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AccountDetails } from './accountDetails' 

@Injectable({
  providedIn: 'root'
})
export class FetchAccDetailsService {

  constructor(private http:HttpClient) { }
  fileUrl='./assets/data.json'

  getAccDetails(): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(
      this.fileUrl 
    );
  }
  
}

