import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesRes } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MovieDBMoviesRes>('top_rated')

        return topRated.results.map(MovieMapper.fromMovieDBResultToEnttity);



    } catch (error) {
        throw new Error('Error fetching movies  - TopRatedUseCase')
    }
}