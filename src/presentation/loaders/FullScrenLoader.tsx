
import { ActivityIndicator, Text, View } from 'react-native';


const FullScreenLoader = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ActivityIndicator size="large" color={'indigo'} />
        </View>
    )
}

export default FullScreenLoader
