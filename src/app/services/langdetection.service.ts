import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LangDetectionResponse } from '../model';



@Injectable({
  providedIn: 'root'
})
export class LangdetectionService {
  private readonly apiUrl = environment.apiUrl+ '/li/v1';

  constructor(private httpClient: HttpClient) { }
  detectLanguage(text1: string, clean: boolean): Observable<LangDetectionResponse>{
    let token = localStorage.getItem('token');
    let url = '/?text='+text1+'&token='+token;
    if (clean === true) {
      console.log("UKLJUCEN CLEAN");
      url = '/?text=' + text1 + '&clean=' + clean + '&token=' + token;
    }
    let a = this.apiUrl + url;
    console.log("OVO JE URL ZA LANGDETECTION: " + a);
    
    return this.httpClient.get<LangDetectionResponse>(a);
  }
}
