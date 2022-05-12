import { View } from 'react-native';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function PigeonDevScreen() {
  return (
    <View>
      <Header title="The Pigeon of Death question"/>
      <Footer title='(You are the master, you decide.)'/>
    </View>
  )
}