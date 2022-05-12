import { Text, View, Image } from 'react-native';
import { styles } from './StartBoard.style';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export default function StartBoard() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../image/pigeon.png')}
            />
            <Pressable style={styles.button} /* onPress={retry} */>
                <Text style={styles.text}>Start the game</Text>
            </Pressable>
            <View style={styles.bottom} />
        </View>
    );
}
