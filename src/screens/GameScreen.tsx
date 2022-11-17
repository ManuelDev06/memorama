import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import SwitchCustom from '../components/SwitchCustom';
import { RootStackParams } from '../navigator/Navigator';
import  {useImages}  from '../hooks/useImages';
import ButtonImage from '../components/ButtonImage';
import { useState } from 'react';

interface Props extends StackScreenProps<RootStackParams, 'GameScreen'>{}

const GameScreen = ({route}:Props) => {
  
  const {mode,limit} = route.params

  const {images} = useImages(limit);

  const [pairs, setPairs] = useState(false)
  const [idImage, setIdImage] = useState(-1)
  const [idImage2, setIdImage2] = useState(-1)

  const onPress = (id:number) => {
    if(idImage === -1){
      setIdImage(id);
    }else{
      setIdImage2(id);
      console.log(id, idImage)
      if(id === idImage){
        setPairs(true)
      }
      setIdImage(-1)
      setIdImage2(-1)
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <SwitchCustom
        title={mode}
      />
      <View style={{alignItems:'center', flex:1, justifyContent: 'center'}}>
          <View
            style={styles.container}
          >
            {images.map((item) => (
              <ButtonImage
                key={item.id}
                uri={item.img}
                id={item.imgId}
                idImage = {idImage}
                idImage2 = {idImage2}
                isPair={pairs}
                onPress={onPress}
              />
            ))}
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default GameScreen