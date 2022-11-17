import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import { styles } from '../Theme/appTheme';

interface Props {
    title: string
}

const SwitchCustom = ({title}:Props) => {

    const [isDark, setIsDark] = useState(false)

  return (
    <View style={stylesHeader.container}>
        <Text style={styles.title}>{title}</Text>
        <Switch
            value={isDark}
        />
    </View>
  )
}

const stylesHeader = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default SwitchCustom