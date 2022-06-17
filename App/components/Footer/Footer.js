import { Text, View, SafeAreaView } from 'react-native';
import { styles } from './Footer.style';
import { TimerOfGame } from '../../context/context';
import React, { useState, useContext, useEffect } from 'react';

export default function Footer() {
    const { time, setTime } = useContext(TimerOfGame);

    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds + 1);
            }
            if (seconds === 60) {
                setMinutes(minutes + 1);
                setSeconds(0);
            } 
        }, 1000)
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView>

            </SafeAreaView>
            <Text style={styles.text}> {seconds}</Text>
        </View>
    );
}
