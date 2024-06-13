export interface Movie {
    id: number;
    title: string;
    description: string;
    rating: string;
    releaseDate: Date;
    poster: string;
    backdrop: string;
}

export interface FullMovie extends Movie {
    genres: string[];
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}