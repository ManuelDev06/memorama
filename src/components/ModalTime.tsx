import React from 'react'
import { Modal, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Theme/appTheme';

const ModalTime = () => {
  return (
    <Modal style={styles.modal}>
        <View style={styles.modalcontainer}>
            <Text>Ingrese el tiempo</Text>
            <TextInput/>
        </View>
    </Modal>
  )
}

export default ModalTime