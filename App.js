import HomeScreen from './App/screens/HomeScreen';
import CreateGameScreen from './App/screens/CreateGameScreen';
import DashboardScreen from './App/screens/DashboardScreen';
import BellScreen from './App/screens/BellScreen';
import CollegiateScreen from './App/screens/CollegiateScreen';
import PigeonDevScreen from './App/screens/PigeonDevScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Teams, TimerOfGame } from './App/context/context';
import { useState } from 'react';
import React from 'react';



const Stack = createNativeStackNavigator();

export default function App() {

  const [team, setTeam] = useState([]);
  const [time, setTime] = useState('');

  return (
    <NavigationContainer>
      <Teams.Provider value={{ team, setTeam }}>
        <TimerOfGame.Provider value={{ time, setTime }}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Pigeon Of the Death Quizz" component={HomeScreen} />
            <Stack.Screen name="Create a Game" component={CreateGameScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Bell Question" component={BellScreen} />
            <Stack.Screen name="Collegiate Question" component={CollegiateScreen} />
            <Stack.Screen name="PigeonDeath Question" component={PigeonDevScreen} />
          </Stack.Navigator>
        </TimerOfGame.Provider>
      </Teams.Provider>
    </NavigationContainer>


  );
}


