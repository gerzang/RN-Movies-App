import { FullMovie, Movie } from "../../core/entities/movie.entity";
import type { MovieDBMovie, Result } from "../interfaces/movie-db.responses";



export class MovieMapper {

    static fromMovieDBResultToEnttity(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            rating: result.vote_average.toString(),
            releaseDate: new Date(result.release_date),
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        }

    }

    static fromMovieDBToEntity(movie: MovieDBMovie): FullMovie {
        return {
            genres: movie.genres.map(genre => genre.name),
            duration: movie.runtime,
            originalTitle: movie.original_title,
            budget: movie.budget,
            productionCompanies: movie.production_companies.map(company => company.name),
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            rating: movie.vote_average.toString(),
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }
    }
}