import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import UseStateSample from './src/UseStateSample'
import Counter from './src/Counter'
import FlexSample from './src/FlexSample'
import Components from './src/components/Components'

const App = () => {

  return (
    <> 
    {/* <UseStateSample/> */}
    {/* <Counter/> */}
    {/* <FlexSample/> */}
    <Components/>
    </>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        marginBottom:20
    }
})