import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import FullScreenLoader from '../../loaders/FullScrenLoader';

const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upComing, popularNextPage } = useMovies();

  if (isLoading) {
    return (<FullScreenLoader />)
  }


  return (
    <ScrollView>
      <View style={{
        marginTop: top + 20,
        paddingBottom: 50
      }}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movies={popular}
          title='Populares'
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel movies={topRated} title='TopRated' />
        <HorizontalCarousel movies={upComing} title='UpComing' />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
