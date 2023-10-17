import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private entityService: EntityextractionService, private formBuilder: FormBuilder){
    this.text = '';
    this.confidence = 0.6;
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.eeRequest = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }
  ngOnInit(): void {

  }
  extractEntities(): void {
    console.log(this.text + ' ' + this.image + this.abstract + this.categories);
    this.entityService.extractEntities(this.text, this.confidence, this.image, this.abstract, this.categories).subscribe( response => {
      console.log('RESPONSE ZA EE: '+JSON.stringify(response));
    },
      error => {
        console.log("GRESKA: " + error);
      }
    )
    
  }
}
