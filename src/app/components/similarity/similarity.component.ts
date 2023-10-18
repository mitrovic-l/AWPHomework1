import { Component, OnInit } from '@angular/core';
import { SimilarityRequest } from 'src/app/model';
import { TextSimilarityService } from 'src/app/services/text-similarity/text-similarity.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent implements OnInit{
  results: boolean;
  message: string;
  similarityRequest: FormGroup;
  constructor(private similarityService: TextSimilarityService, private route: ActivatedRoute, private formBuilder: FormBuilder, private historyService: HistoryService){
    this.results = false;
    this.message = '';
    this.similarityRequest = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      text1: ['', Validators.required],
      text2: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.results = false;
    this.message = '';
  }
  checkSimilarity(): void {
    this.similarityService.getSimilarity(this.similarityRequest.get('text1')?.value.replace("\ \g", "%20"), this.similarityRequest.get('text2')?.value.replace("\ \g", "%20")).subscribe(response => {
      let message = 'Similarity for: <br>' + this.similarityRequest.get('text1')?.value + '<br> and <br>' + this.similarityRequest.get('text2')?.value + '<br> is: <br>' + 'Language Confidence: ' + response.langConfidence + '<br> Similarity: <b>' + response.similarity + ' </b> <br> Language: ' + response.lang;
      this.results = true;
      this.message = message;
      return response;
      },
      error => {
        console.log(error);
        alert("Greska!");
        
    })
  }
}
