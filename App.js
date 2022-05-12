import HomeScreen from './App/screens/HomeScreen';
import CreateGameScreen from './App/screens/CreateGameScreen';
import DashboardScreen from './App/screens/DashboardScreen';
import BellScreen from './App/screens/BellScreen';
import CollegiateScreen from './App/screens/CollegiateScreen';
import PigeonDevScreen from './App/screens/PigeonDevScreen';
import ScoreBoardScreen from './App/screens/ScoreBoardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Pigeon Of the Death Quizz" component={HomeScreen} />
        <Stack.Screen name="Create a Game" component={CreateGameScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Bell Question" component={BellScreen} />
        <Stack.Screen name="Collegiate Question" component={CollegiateScreen} />
        <Stack.Screen name="PigeonDeath Question" component={PigeonDevScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


