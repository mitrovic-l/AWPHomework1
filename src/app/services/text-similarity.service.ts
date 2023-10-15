import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SimilarityResponse } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {
  private readonly apiUrl = environment.apiUrl+ '/sim/v1';


  constructor(private httpClient: HttpClient) { }
  
  getSimilarity(text1: string, text2: string): Observable<SimilarityResponse>{
    let token = localStorage.getItem('token');
    let text1Formatted = text1.replaceAll(" ", "%20");
    let text2Formatted = text2.replaceAll(" ", "%20");
    let url = '/?text1='+text1Formatted+ '&text2='+text2Formatted+'&token='+token;
    console.log(url);
    
    return this.httpClient.get<SimilarityResponse>(this.apiUrl+url);
  }
}
