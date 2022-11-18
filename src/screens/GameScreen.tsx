import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext,useEffect, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import SwitchCustom from '../components/SwitchCustom';
import { RootStackParams } from '../navigator/Navigator';
import  {useImages}  from '../hooks/useImages';
import ButtonImage from '../components/ButtonImage';
import { PairContext } from '../context/PairContext/PairContext';
import ModalEnd from '../components/ModalEnd';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'GameScreen'>{}

const GameScreen = ({route,navigation}:Props) => {
  
  const {mode,limit,time} = route.params

  const [modal,setModal] = useState(false)
  const [title, setTitle] = useState('');
  const [description,setDescription] = useState('')
  const {images} = useImages(limit);

  const {pairState,reset} = useContext(PairContext)
  const {theme:{colors}} = useContext(ThemeContext)

  useEffect(() => {
    if(pairState.counter === limit){
      setTitle('Congratulations')
      setDescription('You won')
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
  
  const children = ({ remainingTime }:{remainingTime:number}) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
  
    return <Text style={{color: colors.text}}>{minutes} : {seconds}</Text>
  }
  
  return (
    <SafeAreaView style={{flex:1}}>
      <SwitchCustom
        title={mode}
      />
      <View style={{alignItems:'center', flex:1, justifyContent: 'center'}}>
          {(time)
            ?<CountdownCircleTimer
              isPlaying
              duration={time!}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              onComplete={() => {
                setTitle('You Lose')
                setDescription('You dont complete the challenge')
                setModal(true);
              }}
            >
                {children}
            </CountdownCircleTimer>
            :null
          }
          <Text style={{...styles.counter, color: colors.text}}>{pairState.counter} / {limit}</Text>
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
      <ModalEnd isOpen={modal} goBack={goBack} title={title} description={description}/>
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