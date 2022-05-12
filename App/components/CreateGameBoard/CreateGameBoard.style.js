import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerButton: {
        display:'flex',
        flexDirection:'row',
    },
    container: {
        width: '100%',
        backgroundColor: 'white',
        height: 60,
        alignItems:'center',
        height:'100%',
    },
    input: {
        borderWidth:2,
        width:200,

    },
    textButton: {
        fontSize: 20,
        fontFamily:'monospace',
        fontWeight:'bold',
    },
    button: {
       // elevation:1,
        display:'flex',
        alignItems:'space-between',
        justifyContent:'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30,
        backgroundColor: 'lightsteelblue',
        with:50,
    },
});