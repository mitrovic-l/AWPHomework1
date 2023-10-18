import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { LangdetectionService } from 'src/app/services/langdetection/langdetection.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-langdetection',
  templateUrl: './langdetection.component.html',
  styleUrls: ['./langdetection.component.css']
})
export class LangdetectionComponent implements OnInit {
  text: string;
  clean: boolean;
  detectionRequest: FormGroup;
  results: boolean;
  message: string;
  constructor(private langdetectionService: LangdetectionService, private formBuilder: FormBuilder){
    this.text = '';
    this.clean = false;
    this.results = false;
    this.message = '';
    this.detectionRequest = this.formBuilder.group({
      text: ['', Validators.required],
      clean: [false]
    })
  }
  ngOnInit(): void {
    this.text = '';
    this.results = false;
    this.message = '';
    this.clean = false;
  }
  checkLanguage(): void {
    this.langdetectionService.detectLanguage(this.detectionRequest.get('text')?.value, this.detectionRequest.get('clean')?.value).subscribe(response => {
      this.clean = this.detectionRequest.get('clean')?.value;
      let langs = response.detectedLangs;
      let message = 'Detected languages for: ' +this.text  + '\n';
      for (let lang of langs) {
        let msg ='[Language: ' + lang.lang + ' | Confidence: ' + lang.confidence + ']\n';
        message += msg;
      }
      message = message.replaceAll('\n', '<br>');
      this.message = message;
      this.results = true;
      return response;
    }, err => {
      alert(JSON.stringify(err.error));
    })
  }



}
