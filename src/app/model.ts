export interface SimilarityResponse {
    lang: string;
    langConfidence: string;
    similarity: number;
}
export interface SimilarityRequest {
    text1: string;
    text2: string;
}
export interface Lang {
    lang: string;
    confidence: number;
}
export interface LangDetectionResponse {
    timestamp: string;
    time: number;
    detectedLangs: Lang[]
}
export interface Lang {
    lang: string;
    confidence: number;
}
//History
export class History {
    url: string;
    date: Date;

    constructor(url: string, date: Date) {
        this.url = url;
        this.date = date;
    }
    setUrl(url: string) {
        this.url = url;
    }
    setDate(date: Date) {
        this.date = date;
    }
}
//Entity Extraction
export class ImageEE{
    full:string;
    thumbnail:string;
    constructor(full:string, thumbnail:string){
        this.full = full;
        this.thumbnail = thumbnail;
    }
}
export class ResponseEE{
    abstract: string;
    categories: [string];
    types: [string];
    confidence: number;
    uri: string;
    imageEE: ImageEE;
    constructor(abstract: string, categories: [string], types: [string], confidence: number, uri: string, imageEE: ImageEE){
        this.abstract = abstract;
        this.categories = categories;
        this.types = types;
        this.confidence = confidence;
        this.uri = uri;
        this.imageEE = imageEE;
    }
}
