import { Text, View, Image, SafeAreaView, FlatList, Pressable } from 'react-native';
import { styles } from './ScoreBoardModal.style';
import { useContext, Fragment } from 'react';
import { Teams } from '../../context/context';
import { useNavigation } from '@react-navigation/native';

export default function ScoreBoardModal() {
    const { team, setTeam } = useContext(Teams);
    const navigation = useNavigation();

    const playAgain = () => {
        const resetTeam = team.map(array => {
            array.score = 0;
            return array
        });
        setTeam(resetTeam);
    }
    const finishGame = () => {
        setTeam([]);
        navigation.navigate('Pigeon Of the Death Quizz')
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={team}
                    contentContainerStyle={{
                        padding: 20,
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <Fragment>
                            <View style={styles.point}>
                                <Text style={styles.pointText}>{item.name}</Text>
                                <Text style={styles.pointText}>{item.score} Points</Text>
                            </View>

                        </Fragment>
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            <View style={styles.endModal}>
                <Pressable style={{
                    backgroundColor: 'rgb(249,214,53)',
                    marginBottom: 5,
                    width: '80%',
                    height: 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    onPress={() => playAgain()}>
                    <Text style={styles.buttonText}>Relancer</Text>
                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: 'rgb(249,214,53)',
                        width: '80%',
                        height: 40,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => finishGame()}>
                    <Text style={styles.buttonText}>Terminer</Text>
                </Pressable>
            </View>
        </View>
    );
}
