// import React from 'react'
import { ResetStyle, GlobalStyle } from './components/globalStyle'
import Test from './components/Test.jsx'
import TestJson from './components/TestJson.jsx'
import TestImg from './components/TestImg.jsx'

function App() {
    return (
        <div>
            <ResetStyle />
            <GlobalStyle />
            <h1>第一個webpack網站</h1>
            <Test />
            <br />
            <TestJson />
            <br />
            <TestImg />
        </div>
    )
}

export default App
