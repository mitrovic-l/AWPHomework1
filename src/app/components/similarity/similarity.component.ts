import { Component, OnInit } from '@angular/core';
import { SimilarityRequest } from 'src/app/model';
import { TextSimilarityService } from 'src/app/services/text-similarity.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";


@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent implements OnInit{
  text1: string;
  text2: string;
  similarityRequest: FormGroup;
  constructor(private similarityService: TextSimilarityService, private route: ActivatedRoute, private formBuilder: FormBuilder){
    this.text1 = '';
    this.text2 = '';
    this.similarityRequest = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      text1: ['', Validators.required],
      text2: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    
  }
  checkSimilarity(): void {
    console.log('aaaaa');
    console.log('Tekst je'+this.text1);
    
    this.similarityService.getSimilarity(this.text1, this.text2).subscribe(response => {
      console.log(JSON.stringify(response));
      //alert(JSON.stringify(response));
      return response;
      },
      error => {
        console.log(error);
        alert("Greska!");
        
    })
  }
}
