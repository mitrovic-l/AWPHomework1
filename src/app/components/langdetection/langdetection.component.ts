import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { LangdetectionService } from 'src/app/services/langdetection.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-langdetection',
  templateUrl: './langdetection.component.html',
  styleUrls: ['./langdetection.component.css']
})
export class LangdetectionComponent implements OnInit {
  text: string;
  detectionRequest: FormGroup;
  constructor(private langdetectionService: LangdetectionService, private formBuilder: FormBuilder){
    this.text = '';
    this.detectionRequest = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      text: ['', Validators.required],
      lang: ['', Validators.required]
      
    })
  }
  ngOnInit(): void {
    
  }
  checkLanguage(): void {
    this.langdetectionService.detectLanguage(this.text).subscribe(response => {
      console.log(JSON.stringify(response));
      let langs = response.detectedLangs;
      let message = 'Detected languages for: ' +this.text  + '\n';
      for (let lang of langs) {
        let msg = lang.lang + ' Confidence: ' + lang.confidence + '\n';
        message += msg;
      }
      alert(message);
      this.text = '';
      return response;
    }, err => {
      console.log(err);
      
    })
  }



}
