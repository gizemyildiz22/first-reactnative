import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const UseStateSample = () => {

    let name='gizem'

    const[fullName, setFullName] = useState("gizem")

    const changeName=()=>{
        setFullName("gizem yildiz")
        console.log(name)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fullName}</Text>
      <Button title='Bana Tıkla' onPress={changeName}/>
    </View>
  )
}

export default UseStateSample

const styles = StyleSheet.create({
    container:{
        //flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        marginBottom:20
    }
})