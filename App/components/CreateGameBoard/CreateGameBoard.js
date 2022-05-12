import { View, TextInput, Pressable, Text } from 'react-native';
import { styles } from './CreateGameBoard.style';
import { Teams } from '../../context/context';
import { useContext } from 'react';



export default function CreateGameBoard() {
    const {team, setTeam} = useContext(Teams);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name of the team"
            />
            <View style={styles.containerButton}>
            <Pressable style={styles.button} onPress={() => console.log(team)}>
                <Text style={styles.textButton}>Add</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => console.log(team)}>
                <Text style={styles.textButton}>Start the game</Text>
            </Pressable>
            </View>
        </View>
    );
}
