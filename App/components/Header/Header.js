import { Text, View, Image } from 'react-native';
import { styles } from './Header.style';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../image/pigeon.png')}
            />
        </View>
    );
}
