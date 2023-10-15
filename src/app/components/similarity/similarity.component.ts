import { Component } from '@angular/core';
import { TextSimilarityService } from 'src/app/services/text-similarity.service';

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent {
  text1: string;
  text2: string;
  constructor(private similarityService: TextSimilarityService){
    this.text1 = '';
    this.text2 = '';
  }
}
