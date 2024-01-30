import { Button,StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const increment=()=>{
    if(counter<10) setCounter(counter+1)
  }
  const decrement=()=>{
    //if(counter>0) setCounter(counter-1)
    counter>0?setCounter(counter-1):null

  }

  console.log('worked')

  return (
    <View style={{backgroundColor:'pink',height: '100%',flex:1,justifyContent:'center',alignContent:'center'}}>
      <Text style={styles.text}>{counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Azalt" color={'crimson'} onPress={decrement}/>
        <Button title="Arttır"color={'deepskyblue'} onPress={increment}/>       
      </View>
      
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    color: 'white',
    textAlign:'center',
    margin:20,
    
  },

  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
  
  }
 
})