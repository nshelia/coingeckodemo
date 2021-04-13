import '@babel/polyfill'
import 'semantic-ui-less/semantic.less'

import { Application } from 'modules/Application'
import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

const root = document.getElementById('appMountPoint')

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <Application />
    </ThemeProvider>
  )
}

render(<App />, root)
