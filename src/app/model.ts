export interface SimilarityResponse{
    lang: string;
    langConfidence: string;
    similarity: string;
}
export interface SimilarityRequest{
    text1: string;
    text2: string;
}