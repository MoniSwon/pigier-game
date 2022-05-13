import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        width: '100%',
        backgroundColor: 'white',
        height: 60,
        alignItems: 'center',
        height: '100%',
    },
    input: {
        borderWidth: 2,
        width: 200,
        paddingLeft: 10,
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: 'bold',
        borderColor: 'lavender',
        color: 'rgb(249,214,53)',
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20

    },
    textButton: {
        fontSize: 20,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    },
    button: {
        // elevation:1,
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 30,
        backgroundColor: 'lightsteelblue',
        with: 50,
    },
    line: {
        marginTop:20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width:'100%'
    },
    flatlist: {
        fontSize: 20,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    }
});