import type { ReactElement } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App(): ReactElement {
  

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
