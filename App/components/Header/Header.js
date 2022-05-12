import { Text, View } from 'react-native';
import { styles } from './Header.style';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}
