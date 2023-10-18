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
  text1: string;
  text2: string;
  results: boolean;
  message: string;
  similarityRequest: FormGroup;
  constructor(private similarityService: TextSimilarityService, private route: ActivatedRoute, private formBuilder: FormBuilder, private historyService: HistoryService){
    this.text1 = '';
    this.text2 = '';
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
    this.text1 = '';
    this.text2 = '';
    this.results = false;
    this.message = '';
  }
  checkSimilarity(): void {
    console.log('aaaaa');
    console.log('Tekst je'+this.text1);

    this.similarityService.getSimilarity(this.text1.replace("\ \g", "%20"), this.text2.replace("\ \g", "%20")).subscribe(response => {
      console.log(JSON.stringify(response));
      //alert(JSON.stringify(response));
      let message = 'Similarity for: <br>' + this.text1 + '<br> and <br>' + this.text2 + '<br> is:' + 'Language Confidence: ' + response.langConfidence + '<br> Similarity: ' + response.similarity + '<br> Language: ' + response.lang;
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
