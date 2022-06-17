import { useContext, Fragment } from 'react';
import { Teams } from '../../context/context';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, SafeAreaView, FlatList, Pressable } from 'react-native';
import { styles } from './Dashboard.style';


export default function Dashboard() {
    const { team, setTeam } = useContext(Teams);
    const navigation = useNavigation();
    

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
        </View>
    );
}