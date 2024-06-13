import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesRes } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<MovieDBMoviesRes>('upcoming')

        return upcoming.results.map(MovieMapper.fromMovieDBResultToEnttity);



    } catch (error) {
        throw new Error('Error fetching movies  - UpcomingUseCase')
    }
}