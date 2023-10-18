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
  confidence: number;
  image: boolean;
  abstract: boolean;
  categories: boolean;
  results: boolean;
  imageResults: string[];
  annotationResults: Annotation[];
  constructor(private entityService: EntityextractionService, private formBuilder: FormBuilder) {
    this.confidence = 0.6;
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.results = false;
    this.imageResults = [];
    this.annotationResults = [];
    this.eeRequest = this.formBuilder.group({
      text: ['', Validators.required],
      image: [false],
      abstract: [false],
      categories: [false],
      confidence: [0.6]
    });
  }
  ngOnInit(): void {
    this.confidence = 0.6;
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.imageResults = [];
    this.annotationResults = [];
    this.results = false;
  }
  extractEntities(): void {
    this.entityService.extractEntities(this.eeRequest.get('text')?.value, this.confidence, this.eeRequest.get('image')?.value, this.eeRequest.get('abstract')?.value, this.eeRequest.get('categories')?.value).subscribe(response => {
      let annotations = response.annotations;
      this.image = this.eeRequest.get('image')?.value;
      this.abstract = this.eeRequest.get('abstract')?.value;
      this.categories = this.eeRequest.get('categories')?.value;
      for (let a of annotations) {
        this.annotationResults.push(a);
        this.imageResults.push(a.image.thumbnail);
        console.log(a.image.thumbnail);
      }
      this.results = true;
    },
      error => {
        console.log("GRESKA: " + JSON.stringify(error.error.message));
        alert("Language Error: " + JSON.stringify(error.error.message));
        this.confidence = 0.6;
        this.image = false;
        this.abstract = false;
        this.categories = false;
      }
    )

  }
}
