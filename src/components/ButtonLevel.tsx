import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RootStackParams } from '../navigator/Navigator';

interface ItemProps {
    name: string;
    rules: string[];
    image: string;
    color: string;
    limit: number;
    id: number;
}

interface Props {
    item: ItemProps
    onPress: (id:number,mode:string,limit:number) => void
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

const ButtonLevel = ({item,onPress}:Props) => {

    const{color,name,limit,rules,image} = item

    const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity
        style={{
            backgroundColor: color,
            ...styles.container
        }}
        onPress={() => onPress(item.id,item.name,item.limit)}
    >
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.rules}>Rules</Text>
            {rules.map((value) => (
                <Text style={styles.rules}>   {value}</Text>
            ))
            }
        </View>
        <Image
            source={{uri: image}}
            style={styles.image}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        height:  80,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: 10
    },
    image:{
        width: 70,
        height: '100%',
        resizeMode: 'stretch'
    },
    title:{
        color: 'white',
        fontWeight: '800',
    },
    rules:{
        color: 'white'
    }
});

export default ButtonLevel