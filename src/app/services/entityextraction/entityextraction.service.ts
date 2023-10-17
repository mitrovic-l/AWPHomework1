import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HistoryService } from '../history/history.service';
import { Observable } from 'rxjs';
import { ResponseEE } from 'src/app/model';
import { History } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
/*
https://api.dandelion.eu/datatxt/nex/v1/
&text=The%20doctor%20says%20an%20apple%20is%20better%20than%20an%20orange
 &include=types%2Cabstract%2Ccategories
 &token=<YOUR_TOKEN> 
*/
export class EntityextractionService {
  private readonly apiUrl = environment.apiUrl + '/nex/v1';
  constructor(private httpClient: HttpClient, private historyService: HistoryService) {}
  extractEntities(text: string, confidence: number, image: boolean, abstract: boolean, categories: boolean): Observable<ResponseEE>{
    let token = localStorage.getItem('token');
    let urlText = '/?text=' + text;
    let urlInclude = '&include=';
    if (image){
      urlInclude +='image ';
    }
    if (abstract){
      urlInclude +='abstract ';
    }
    if (categories){
      urlInclude +='categories ';
    }
    let urlConfidence = '&min_confidence=' + confidence;
    let tokenUrl = '&token='+token;
    let fullUrl = urlText + urlConfidence + urlInclude + tokenUrl;
    console.log("OVO JE URL!!!!: " + fullUrl);
    let a = this.apiUrl + fullUrl;
    this.historyService.addHistory( new History(a, new Date()));
    return this.httpClient.get<ResponseEE>(a);
  }
}
