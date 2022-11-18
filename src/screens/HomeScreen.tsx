import React, {useContext, useState} from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import ButtonLevel from '../components/ButtonLevel';
import { modes } from '../data/modes';
import { styles } from '../Theme/appTheme';
import SwitchCustom from '../components/SwitchCustom';
import { RootStackParams } from '../navigator/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ModalTime from '../components/ModalTime';
import { ValueMap } from 'react-native-simple-time-picker';
import { ThemeContext } from '../context/themeContext/ThemeContext';



type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

const HomeScreen = () => {

    const {theme:{colors}} = useContext(ThemeContext)

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const [openModal,setOpenModal] = useState(false);

    const [value, setValue] = useState<ValueMap>({
        hours: 1,
        minutes: 0,
        seconds: 0,
      });
      

    const showModal = (id:number,mode:string,limit:number) => {
        if(id === 1){
            navigation.navigate('GameScreen',{mode,limit})
        }else if(id === 2){
            setOpenModal(true)
        }else{
            navigation.navigate('GameScreen',{mode,limit,time: 300})
        }
    }

    const moveScreen = () => {
        setOpenModal(false);
        navigation.navigate('GameScreen',{mode:'Medium',limit:10,time:(value.minutes*60)+value.seconds})
    }

  return (
    <SafeAreaView
        style={{flex:1}}
    >   
        <SwitchCustom
            title='Welcome!'
        />
        <View style={styles.globalContainer}>
            <Text style={{...styles.instructions, color: colors.text}}>Choose the dificulty of game</Text>
                {modes.map((item) => (
                    <ButtonLevel
                    key={item.id}
                    item={item}
                    onPress={showModal}
                    />
                    ))
                    
                }
        </View>
        <ModalTime isOpen={openModal} value={value} setValue={setValue} moveScreen={moveScreen}/>
    </SafeAreaView>
  )
}

export default HomeScreen