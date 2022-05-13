import { View } from 'react-native';
import Footer from '../components/Footer/Footer';
import HeaderWithModal from '../components/HeaderWithModal/HeaderWithModal';
import ScoreBoardModal from '../components/ScoreBoardModal/ScoreBoardModal';

export default function DashboardScreen() {
  return (
    <View>
      <HeaderWithModal/>
      <Footer title='(You are the master, you decide.)'/>
    </View>
  )
}