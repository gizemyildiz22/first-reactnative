import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexSample = () => {
  return (
    <View style={styles.container}>
        <View style={styles.secondContainer}>
            <Text style={styles.firstText}>1</Text>
        </View>
        <View style={styles.thirdContainer}>
            <Text>2</Text>
        </View>
        <View style={styles.forthContainer}>
            <Text>3</Text>
        </View>
    </View>
    
  )
}

export default FlexSample

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'',
        backgroundColor:'red'
    },
    secondContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'aquamarine'
    },
    thirdContainer:{
        flex:2,
        backgroundColor:'pink'
    },
    forthContainer:{
        flex:5,
        backgroundColor:'lightgreen'
    },
    firstText:{
        fontSize:35,
        color:'blue',
        //textAlign:'center',
        backgroundColor:'indianred'

    }


})