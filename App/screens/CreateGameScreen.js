import { View } from 'react-native';
import Header from '../components/Header/Header';
import CreateGameBoard from '../components/CreateGameBoard/CreateGameBoard';
import { useContext } from 'react';
import { Teams } from '../context/context';

export default function CreateGameScreen() {
  const {team, setTeam} = useContext(Teams);
  return (
    <View>
      <Header/>
      <CreateGameBoard/>
    </View>
  )
}