import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SimilarityResponse } from '../../model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HistoryService } from '../history/history.service';
import { History } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {
  private readonly apiUrl = environment.apiUrl+ '/sim/v1';


  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }
  
  getSimilarity(text1: string, text2: string): Observable<SimilarityResponse>{
    let token = localStorage.getItem('token');
    let url = '/?text1='+text1+ '&text2='+text2+'&token='+token;
    console.log(url);
    let a = this.apiUrl + url;
    console.log("Pun url je " + a);
    this.historyService.addHistory(new History(a, new Date()));
    return this.httpClient.get<SimilarityResponse>(a)
    };
  
}
