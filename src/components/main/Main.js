import { Button, Text, View } from 'react-native'
import React from 'react'
import { styles } from './main.style'

const Main = (props) => {
  let content=props.mainContent
  let setCounter=props.setCounter
  let counter=props.counter
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
      <Button title="arttır" onPress={()=>setCounter(counter+1)}/>
      <Button title="azalt" onPress={()=>setCounter(counter-1)}/>
    </View>
  )
}

export default Main

