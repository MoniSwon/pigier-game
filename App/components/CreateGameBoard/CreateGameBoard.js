import { View, TextInput, Pressable, Text, SafeAreaView, FlatList, Button } from 'react-native';
import { styles } from './CreateGameBoard.style';
import { Teams } from '../../context/context';
import { useContext, useState, Fragment } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function CreateGameBoard() {
    const navigation = useNavigation();
    const { team, setTeam } = useContext(Teams);
    const [name, setName] = useState("");
    const newTeam = (name) => {
        setTeam([...team, {
            name: name,
            score: 0,
            id: team.length,
        }])
    }

    const deleteTeam = (id) => {
        const newTeam = team.filter((team, teamIndex) => {
            return teamIndex !== id;
        });
        setTeam(newTeam);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name of the team"
                onChangeText={(name) => setName(name)}
            />
            <View style={styles.containerButton}>
                <Pressable style={styles.button} onPress={() => newTeam(name)}>
                    <Text style={styles.textButton}>Add</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.textButton}>Let's play!</Text>
                </Pressable>
            </View>

            <View style={styles.line}></View>

            <View>
                <SafeAreaView>
                    <FlatList
                        data={team}
                        contentContainerStyle={{
                            display:'flex',
                            flexDirection:'column',
                            padding: 20,
                        }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <Fragment>
                                <View style={styles.buttonTeam}>
                                <Pressable style={{
                                    backgroundColor: 'rgb(249,214,53)',
                                    width: 250,
                                    height: 50,
                                    borderRadius: 10,
                                    margin: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}
                                    onPress={() => deleteTeam(item.id)}>
                                    <Text style={styles.flatlist}>{item.name}</Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        backgroundColor: 'rgb(249,214,53)',
                                        width: 50,
                                        height: 50,
                                        borderRadius: 100,
                                        margin: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => deleteTeam(item.id)}>
                                        <Text style={styles.flatlist}>✖</Text>
                                </Pressable>
                                </View>
                            </Fragment>
                        }
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
    //do a flatlist of all the team that was created and then, create a button in each of these list to delete the team
}
