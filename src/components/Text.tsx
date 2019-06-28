import React from 'react'
import { Text as NativeText } from 'react-native'

import { FontContext } from './FontLoader'


export const Text: React.FC = (props) => {
  const { areLoaded: fontsAreLoaded } = React.useContext(FontContext)


  return fontsAreLoaded ? <NativeText style={{fontFamily: 'font'}}{...props}/> : null
}
