import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../presentation/screens/home/HomeScreen';
import DetailsScreen from '../presentation/screens/details/DetailsScreen';


export type RootStackParams = {
    Home: undefined;
    Details: { movieId: number };
}

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />

        </Stack.Navigator>
    )
}

export default Navigation
