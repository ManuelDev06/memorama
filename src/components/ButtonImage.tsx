import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

interface Props {
    uri: string,
    isPair: boolean,
    id: number,
    idImage: number
    idImage2: number
    onPress : Function
}

const widthScreen = Dimensions.get('screen').width

const ButtonImage = ({uri,isPair,id, idImage,idImage2,onPress}:Props) => {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        console.log(idImage, id)
        if(!isPair && (idImage === id || idImage2 === id)){
            setOpacity(1)
            console.log('Entro')
        }
    },[isPair])
  return (
    <TouchableOpacity
        onPress={() => {
            onPress(id)
            setOpacity(0.5);
        }}
    >
        <Image
            source={{uri}}
            style={{...styles.image,opacity}}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        width: widthScreen/5,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10
    }
});

export default ButtonImage