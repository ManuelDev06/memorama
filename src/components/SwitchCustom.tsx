import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../Theme/appTheme';

interface Props {
    title: string
}

const SwitchCustom = ({title}:Props) => {

    const {theme:{colors,dark},setDarkTheme,setLightTheme} = useContext(ThemeContext)

    const changeTheme = () => {
        if(!dark)
            setDarkTheme();
        else
            setLightTheme()
    }
  return (
    <View style={stylesHeader.container}>
        <Text style={{...styles.title, color: colors.text}}>{title}</Text>
        <Switch
            value={dark}
            onChange={changeTheme}
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