import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        height: 60,
    },
    text: {
        fontSize:35,
        fontWeight:'bold',
        color:"white"
    },
    image: {
        height: 70,
        padding: 10,
        marginTop:241,
                position:'absolute',
                width:'100%'

        //elevation:1,
    },
    imageicon: {
        zIndex:1,
        width :50,
        height:50,
        position:'absolute',
    }
});