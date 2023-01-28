// import React from 'react'
import { ResetStyle, GlobalStyle } from './components/globalStyle'
import Test from './components/Test.jsx'
import TestJson from './components/TestJson.jsx'

function App() {
    return (
        <div>
            <ResetStyle />
            <GlobalStyle />
            <h1>第一個webpack網站</h1>
            <Test />
            <br />
            <TestJson />
        </div>
    )
}

export default App
