import React from 'react'
import * as Font from 'expo-font'

export type FontContextType = {
  areLoaded: boolean
}

// by default this should be false (and this should be set in App as needed) but we
// set the default to true so jest is happy and renders stuffs.
export const FontContext = React.createContext<FontContextType>({
  areLoaded: false,
})

export const FontLoader: React.FC = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = React.useState<FontContextType>({
    areLoaded: false,
  })

  const loadFonts = async () => {
    await Font.loadAsync({
      'font': require('../media/font.woff'),
    })

    setFontsLoaded({
      areLoaded: true,
    })
  }

  React.useEffect(() => {
    loadFonts()
  }, [])

  return <FontContext.Provider value={fontsLoaded} children={children} />
}
