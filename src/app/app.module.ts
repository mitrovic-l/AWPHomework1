import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SimilarityComponent } from './components/similarity/similarity.component';
import { LangdetectionComponent } from './components/langdetection/langdetection.component';
import { HistoryComponent } from './components/history/history.component';
import { EntityextractionComponent } from './components/entityextraction/entityextraction.component';
import { SentimentanalysisComponent } from './components/sentimentanalysis/sentimentanalysis.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent,
    SimilarityComponent,
    LangdetectionComponent,
    HistoryComponent,
    EntityextractionComponent,
    SentimentanalysisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
