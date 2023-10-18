import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';
import { History } from 'src/app/model';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyList: History[];
  constructor(private historyService: HistoryService){
    this.historyList = [];
  }
  ngOnInit(): void {
    this.historyList = this.historyService.getHistory();
  }



}
