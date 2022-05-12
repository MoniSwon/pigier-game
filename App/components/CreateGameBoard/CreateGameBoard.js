import { View, TextInput, Pressable, Text } from 'react-native';
import { styles } from './CreateGameBoard.style';
import { Teams } from '../../context/context';
import { useContext, useState } from 'react';



export default function CreateGameBoard() {
    const {team, setTeam} = useContext(Teams);
    const [name, setName] = useState("");
    const newTeam = (name) => {
         team.push({
            name: name,
            score: 0,
            id:team.length,
        })
        return team
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name of the team"
                onChangeText={(name) => setName(name)}  
            />
            <View style={styles.containerButton}>
            <Pressable style={styles.button} onPress={() => setTeam(newTeam(name))}>
                <Text style={styles.textButton}>Add</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => console.log(team)}>
                <Text style={styles.textButton}>Start the game</Text>
            </Pressable>
            </View>
        </View>
    );
}
