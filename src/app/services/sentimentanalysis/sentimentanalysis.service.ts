import { Injectable } from '@angular/core';
import { HistoryService } from '../history/history.service';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History, ResponseSA } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class SentimentanalysisService {
  private readonly apiUrl = environment.apiUrl+ '/sent/v1';
  constructor(private httpClient: HttpClient, private historyService: HistoryService) {}
  analysis(text: string, language: string): Observable<ResponseSA> {
    let token = localStorage.getItem('token');
    let textUrl = '/?text='+text;
    let tokenUrl = '&token='+token;
    let fullUrl = '';
    if (language === 'auto'){
      fullUrl += textUrl + tokenUrl;
    } else {
      fullUrl += textUrl + '&lang='+language + tokenUrl;
    }
    let a = this.apiUrl + fullUrl;
    console.log("KONACAN URL: " + a);
    this.historyService.addHistory( new History(a, new Date()));
    return this.httpClient.get<ResponseSA>(a);
  }
}
