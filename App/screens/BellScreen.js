import { View } from 'react-native';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function BellScreen() {
  return (
    <View>
      <Header title="Bell question"/>
      <Footer title='(You are the master, you decide.)'/>
    </View>
  )
}