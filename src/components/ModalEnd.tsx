import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigator/Navigator';
import { styles } from '../Theme/appTheme';


interface Props{
  isOpen: boolean,
  goBack: Function,
  title: string,
  description: string
}


const ModalEnd = ({isOpen, goBack, title, description}:Props) => {
  return (
    <Modal
      animationType='slide'
      visible={isOpen}
      transparent={true}
    >
      <View style={styles.modal}>
        <View style={styles.modalcontainer}>
          <Text style={stylesModal.title}>{title}</Text>
          <Text style={stylesModal.subtitle}>{description}</Text>
          <TouchableOpacity style={stylesModal.button}
            onPress={() => goBack()}
          >
            <Text style={stylesModal.buttonTitle}>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const stylesModal = StyleSheet.create({
    modal:{
      backgroundColor: 'rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      flex:1
    },
    container:{
      width:250,
      height:250,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      elevation: 10,
      borderRadius: 10
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    subtitle:{
      fontSize:15,
      fontWeight: '500'
    },
    button:{
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: '#3885CE',
      width: 200,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonTitle:{
      color: 'white',
      fontWeight: '500'
    }
});

export default ModalEnd