import { Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import { styles } from './HeaderWithModal.style';

export default function HeaderWithModal() {
    const showModal = () => {
        console.log("hey");
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => showModal()}>
                <Image
                    style={styles.imageicon}
                    source={require('../../image/menu-icon.png')}
                />
            </TouchableWithoutFeedback>

            <Image
                style={styles.image}
                source={require('../../image/pigeon.png')}
            />
        </View>
    );
}
