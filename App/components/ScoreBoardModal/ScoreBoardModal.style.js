import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        backgroundColor: 'lavender',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        height: '90%',
    },
    point: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
    },
    pointText: {
        margin:10,
        fontSize:25,
    },
    endModal: {
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        position:'absolute',
        bottom:10,
        width:'100%'
    },
    buttonText : {
        fontWeight:'bold',
        color:'white',

    }

});