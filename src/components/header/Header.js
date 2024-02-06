import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './header.style'

const Header = (props) => {
  
  return (
    <View style={styles.container}>
      <Text>{props.yazi}</Text>
      <Text style={styles.text}>{props.counter}</Text>
    </View>
  )
}

export default Header

