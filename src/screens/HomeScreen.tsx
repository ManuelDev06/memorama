import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import ButtonLevel from '../components/ButtonLevel';
import { modes } from '../data/modes';
import { styles } from '../Theme/appTheme';
import SwitchCustom from '../components/SwitchCustom';

const HomeScreen = () => {
  return (
    <SafeAreaView
        style={{flex:1}}
    >   
        <SwitchCustom
            title='Welcome!'
        />
        <View style={styles.globalContainer}>
            <Text style={styles.instructions}>Choose the dificulty of game</Text>
                {modes.map((item) => (
                    <ButtonLevel
                        key={item.name}
                        title={item.name}
                        rules={item.rules}
                        color={item.color}
                        image={item.image}
                        limit={item.limit}
                    />
                ))

                }
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen