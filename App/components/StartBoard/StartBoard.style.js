import { StyleSheet } from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(249,214,53)', 
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    image: {
        width: '100%',
        height: 70,
        padding: 10,
        marginTop:241,
        //elevation:1,
        position:'absolute',

    },
    text: {
        fontSize: 30,
        fontFamily:'monospace',
        fontWeight:'bold',
    },
    button: {
       // elevation:1,
        width:350,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30,
        backgroundColor: 'lightsteelblue',
        position:'absolute',
        marginTop:300

    },
    bottom: {
        /* backgroundColor: "pink",
        height:'100%', */
      },
});