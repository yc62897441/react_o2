// import React from 'react'
import { ResetStyle, GlobalStyle } from './components/globalStyle'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './containers/HomePage.jsx'
import TestJson from './components/TestJson.jsx'
import TestImg from './components/TestImg.jsx'

function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <HashRouter>
                <Navbar />
                <Switch>
                    <Route path="/json">
                        <TestJson />
                    </Route>
                    <Route path="/img">
                        <TestImg />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Route path="*">
                        <HomePage />
                    </Route>
                </Switch>
            </HashRouter>
        </>
    )
}

export default App
