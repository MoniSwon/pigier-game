import { View } from 'react-native';
import Header from '../components/Header/Header';
import CreateGameBoard from '../components/CreateGameBoard/CreateGameBoard';

export default function CreateGameScreen() {
  return (
    <View>
      <Header/>
      <CreateGameBoard/>
    </View>
  )
}