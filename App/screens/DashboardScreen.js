import { View } from 'react-native';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function DashboardScreen() {
  return (
    <View>
      <Header title="Dashboard"/>
      <Footer title='(You are the master, you decide.)'/>
    </View>
  )
}