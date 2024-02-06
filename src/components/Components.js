import {View , Text } from 'react-native'
import React, { useState } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import styles from './components.style'



const Components = () => {
    const [counter, setCounter] = useState(10)

    let headerContent='Merhaba benim adım Header ve Components den geldim'
    let mainContent='Merhaba benim adım Main ve Components den geldim'
    let footerContent='Merhaba benim adım Footer ve Components den geldim'

  return (
    <View style={styles.container}>
      <Header yazi={headerContent} counter={counter}/>
      <Main setCounter={setCounter} counter={counter} mainContent={'Merhaba benim adım Main ve Components den geldim'}/>
      <Footer footerContent={footerContent} mainContent={mainContent} />
    </View>
  )
}

export default Components

