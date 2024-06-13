
import { StackScreenProps } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import { RootStackParams } from '../../../navigation/Navigation'
import { useMovie } from '../../hooks/useMovie';
import MovieHeader from '../../components/movie/MovieHeader';
import MovieDetails from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import FullScreenLoader from '../../loaders/FullScrenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params;


  const { isLoading, movie, cast = [] } = useMovie(movieId);

  if (isLoading) return <FullScreenLoader />

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  )
}

export default DetailsScreen
