import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext,useEffect, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import SwitchCustom from '../components/SwitchCustom';
import { RootStackParams } from '../navigator/Navigator';
import  {useImages}  from '../hooks/useImages';
import ButtonImage from '../components/ButtonImage';
import { PairContext } from '../context/PairContext/PairContext';
import ModalEnd from '../components/ModalEnd';

interface Props extends StackScreenProps<RootStackParams, 'GameScreen'>{}

const GameScreen = ({route,navigation}:Props) => {
  
  const {mode,limit} = route.params

  const [modal,setModal] = useState(false)

  const {images} = useImages(limit);

  const {pairState,reset} = useContext(PairContext)

  useEffect(() => {
    if(pairState.counter === limit){
      setModal(true);
    }
  },[pairState.counter])

  useEffect(() => {
    reset();
  },[])

  const goBack = () => {
    setModal(false)
    navigation.navigate('HomeScreen')
  }
  
  return (
    <SafeAreaView style={{flex:1}}>
      <SwitchCustom
        title={mode}
      />
      <View style={{alignItems:'center', flex:1, justifyContent: 'center'}}>
          <Text style={styles.counter}>{pairState.counter} / {limit}</Text>
          <View
            style={styles.container}
          >
            {images.map((item,index) => (
              <ButtonImage
                key={item.id+index}
                image={item.img}
                id={item.imgId}
              />
            ))}
          </View>
      </View>
      <ModalEnd isOpen={modal} goBack={goBack}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    counter:{
      fontWeight: '700',
      fontSize: 20,
      marginBottom: 10
    }
});

export default GameScreen