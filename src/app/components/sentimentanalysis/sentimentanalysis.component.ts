import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SentimentanalysisService } from 'src/app/services/sentimentanalysis/sentimentanalysis.service';

@Component({
  selector: 'app-sentimentanalysis',
  templateUrl: './sentimentanalysis.component.html',
  styleUrls: ['./sentimentanalysis.component.css']
})
export class SentimentanalysisComponent implements OnInit {
  text: string;
  sentimentForm: FormGroup;
  results: boolean;
  message: string;
  type: string;
  score: number;
  languages = [
    { id: 1, name: 'Auto', value: 'auto' },
    { id: 2, name: 'English', value: 'en' },
    { id: 3, name: 'Italian', value: 'it' }
  ]
  constructor(private formBuilder: FormBuilder, private sentimentService: SentimentanalysisService) {
    this.text = '';
    this.results = false;
    this.message = '';
    this.type = '';
    this.score = 0;
    this.sentimentForm = this.formBuilder.group({
      language: [1],
      text: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.text = '';
    this.results = false;
    this.message = '';
    this.type = '';
    this.score = 0;
  }

  analysis(): void {
    this.results = false;
    this.message = '';
    let lang = '';
    if (this.sentimentForm.value.language === 1 || this.sentimentForm.value.language === 0) {
      lang = 'auto';
    } else if (this.sentimentForm.value.language === 2) {
      lang = 'en';
    } else if (this.sentimentForm.value.language === 3) {
      lang = 'it';
    }
    console.log(lang);

    console.log(this.sentimentForm.value);
    this.sentimentService.analysis(this.sentimentForm.value.text, lang).subscribe(response => {
      console.log("RESPONSE: ");
      console.log(JSON.stringify(response));
      this.message += 'Time required: ' + response.time + '<br>';
      this.message += 'Language: ' + response.lang + ' <br>';
      this.message += 'Sentiment Score: ' + response.sentiment.score + ' <br>';
      this.type = response.sentiment.type;
      this.score = response.sentiment.score;
      this.results = true;
    }, error => {
      console.log(JSON.stringify(error.error));

    });
  }

  getStyleForType() {
    // Map the type value to a color gradient
    const typeValue = this.score;
    let color;

    const brown = [165, 42, 42]; // Brown color in RGB
    const red = [255, 0, 0];     // Red color in RGB
    const green = [0, 128, 0];   // Green color in RGB

    if (typeValue === 0) {
      color = `rgb(${brown[0]}, ${brown[1]}, ${brown[2]})`; // When type is 0, set the color to brown.
    } else if (typeValue < 0) {
      // Interpolate between brown and red for negative values
      const t = Math.max(0, Math.min(1, -typeValue)); // Ensure t is between 0 and 1
      color = `rgb(${brown[0] + (red[0] - brown[0]) * t}, ${brown[1] + (red[1] - brown[1]) * t}, ${brown[2] + (red[2] - brown[2]) * t})`;
    } else {
      // Interpolate between brown and green for positive values
      const t = Math.max(0, Math.min(1, typeValue)); // Ensure t is between 0 and 1
      color = `rgb(${brown[0] + (green[0] - brown[0]) * t}, ${brown[1] + (green[1] - brown[1]) * t}, ${brown[2] + (green[2] - brown[2]) * t})`;
    }

    // Define the style
    const style = {
      color: color,
    };

    return style;
  }
}
