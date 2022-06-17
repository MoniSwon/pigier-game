import { View } from 'react-native';
import HeaderWithModal from '../components/HeaderWithModal/HeaderWithModal';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';


export default function DashboardScreen() {
  return (
    <View>
      <HeaderWithModal/>
      <Dashboard/>
      <Footer/>
    </View>
  )
}