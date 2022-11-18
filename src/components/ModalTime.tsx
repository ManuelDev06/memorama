import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native';
import { styles } from '../Theme/appTheme';
import {TimePicker, ValueMap} from 'react-native-simple-time-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    isOpen: boolean
    value: ValueMap
    setValue: (newValue:ValueMap) => void
    moveScreen: () => void
}


const ModalTime = ({isOpen,value,setValue,moveScreen}:Props) => {



    const handleChange = (newValue: ValueMap) => {
    setValue(newValue);
    };

  return (
    <Modal style={styles.modal}
        animationType='slide'
        visible={isOpen}
        transparent={true}
    >
        <View style={styles.modal}>
            <View style={styles.modalcontainer}>
                <Text>Set time</Text>
                <TimePicker 
                    value={value}
                    pickerShows={['minutes','seconds']}
                    minutesUnit={'Min'} 
                    secondsUnit={'Sec'}
                    onChange={handleChange}
                />
                <TouchableOpacity style={stylesModal.button}
                    onPress={moveScreen}
                >
                    <Text style={stylesModal.buttonTitle}>Play</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

const stylesModal = StyleSheet.create({
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

export default ModalTime