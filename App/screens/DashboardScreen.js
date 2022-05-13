import { View } from 'react-native';
import HeaderWithModal from '../components/HeaderWithModal/HeaderWithModal';
import Dashboard from '../components/Dashboard/Dashboard';


export default function DashboardScreen() {
  return (
    <View>
      <HeaderWithModal/>
      <Dashboard/>
    </View>
  )
}