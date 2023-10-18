import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Annotation } from 'src/app/model';
import { EntityextractionService } from 'src/app/services/entityextraction/entityextraction.service';

@Component({
  selector: 'app-entityextraction',
  templateUrl: './entityextraction.component.html',
  styleUrls: ['./entityextraction.component.css']
})
export class EntityextractionComponent implements OnInit {
  eeRequest: FormGroup;
  text: string;
  confidence: number;
  image: boolean;
  abstract: boolean;
  categories: boolean;
  results: boolean;
  imageResults: string[];
  annotationResults: Annotation[];
  constructor(private entityService: EntityextractionService, private formBuilder: FormBuilder) {
    this.text = '';
    this.confidence = 0.6;
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.results = false;
    this.imageResults = [];
    this.annotationResults = [];
    this.eeRequest = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.text = '';
    this.confidence = 0.6;
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.imageResults = [];
    this.annotationResults = [];
    this.results = false;
  }
  extractEntities(): void {
    console.log(this.text + ' ' + this.image + this.abstract + this.categories);
    this.entityService.extractEntities(this.text, this.confidence, this.image, this.abstract, this.categories).subscribe(response => {
      console.log('RESPONSE ZA EE: ' + JSON.stringify(response));
      let annotations = response.annotations;
      for (let a of annotations) {
        this.annotationResults.push(a);
        console.log('ANOTACIJA:  + ' + JSON.stringify(a.abstract) + ' ' + JSON.stringify(a.categories) + ' ' + JSON.stringify(a.image)) ;
        console.log("IMAGE: + " + JSON.stringify(a.image));
        this.imageResults.push(a.image.thumbnail);
      }
      this.results = true;
    },
      error => {
        console.log("GRESKA: " + JSON.stringify(error.error.message));
        alert("Language Error: " + JSON.stringify(error.error.message));
        this.text = '';
        this.confidence = 0.6;
        this.image = false;
        this.abstract = false;
        this.categories = false;
      }
    )

  }
}
