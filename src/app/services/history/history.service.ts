import { Injectable } from '@angular/core';
import { History } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  historyList: History[];
  constructor() {
    this.historyList = [];
   }
   addHistory(history: History) {
    console.log("Dodat novi zahtev u history");
    
     this.historyList.push(history);
   }
   getHistory(): History[] {
     return this.historyList;
   }
   clearHistory() {
     this.historyList = [];
   }

}
