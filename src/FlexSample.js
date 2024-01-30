import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexSample = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>1</Text>
        </View>
        <View>
            <Text>2</Text>
        </View>
    </View>
    
  )
}

export default FlexSample

const styles = StyleSheet.create({
    container:{},

})