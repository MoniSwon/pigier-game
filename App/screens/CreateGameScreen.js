import { View } from 'react-native';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function CreateGameScreen() {
  return (
    <View>
      <Header title="Creation of the game"/>
      <Footer title='(You are the master, you decide.)'/>
    </View>
  )
}