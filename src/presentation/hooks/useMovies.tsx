import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

let popularPage = 1;

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upComing, setUpComing] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();

    }, [])

    const initialLoad = async () => {
        const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upComingPromise = await UseCases.moviesUpcomingUseCase(movieDBFetcher);


        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upComingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise
        ]);
        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpComing(upComingMovies);
        setIsLoading(false);
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upComing,

        popularNextPage: async () => {
            popularPage++;
            const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher, { page: popularPage });
            setPopular(prev => [...prev, ...popularPromise]);
        },
    }
}