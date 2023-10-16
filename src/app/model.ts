export interface SimilarityResponse {
    lang: string;
    langConfidence: string;
    similarity: string;
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