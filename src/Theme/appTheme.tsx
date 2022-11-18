import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    instructions:{
        color: 'black',
        fontSize: 16
    },
    globalContainer:{
        paddingHorizontal: 30
    },
    modal:{
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
      },
      modalcontainer:{
        width:300,
        height:300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: 10
        },
        borderRadius: 15
    }
});