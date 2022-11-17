import React, { useContext } from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { PairContext, PairState } from '../context/PairContext/PairContext';

interface Props {
    image: string,
    id: number,
}

const widthScreen = Dimensions.get('screen').width

const ButtonImage = ({image,id}:Props) => {

    const [opacity, setOpacity] = useState(1);
    const [uri, setUri] = useState(image);

    const {pairState, setPair} = useContext(PairContext)

    useEffect(() => {
        if(!pairState.isPair && pairState.areTwo &&
            (pairState.tempId === id || pairState.idImage2 === id)){
            setOpacity(1)
        }
    },[pairState])

    useEffect(() => {
        setTimeout(() => {
            setUri('https://www.citypng.com/public/uploads/preview/question-mark-button-black-and-gray-silver-11580986864wdvdbthc6m.png')
        },1500)
    },[])

  return (
    <TouchableOpacity
        onPress={() => {
            setPair(id)
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