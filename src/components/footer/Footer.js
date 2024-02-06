import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './footer.style'

const Footer = ({footerContent,mainContent}) => {
  
  return (
    <View style={styles.container}>
      <Text>{footerContent}</Text>
      <Text>{mainContent}</Text>
    </View>
  )
}

export default Footer
