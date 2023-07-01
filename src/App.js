import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screen/homeScreen/HomeScreen'
import LoginScreen from './screen/loginScreen/LoginScreen'
import {Redirect,Route,Switch, useHistory} from 'react-router-dom'
import './_app.scss'
import { useSelector } from 'react-redux'
import WatchScreen from './screen/watchScreen/WatchScreen'
import SearchScreen from './screen/SearchScreen'

const Layout=({children})=>{

    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar=()=>toggleSidebar(value=>!value)

    return(
        <>
           <Header handleToggleSidebar={handleToggleSidebar}/> 
           <div className="app__container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
                <Container fluid className="app__main">
                    {children}
                </Container>
           </div>
        </>
    )
}

const App = () => {

    const {accessToken,loading}=useSelector(state=>state.auth)
    const history=useHistory()
    useEffect(()=>{
        if(!loading && !accessToken){
            history.push('/auth')
        }
    },[accessToken,loading,history])
 
    return (

        <Switch>
            <Route path="/" exact>
                <Layout>
                    <HomeScreen/>
                </Layout>
            </Route>
            <Route path="/auth">
                <LoginScreen/>
            </Route>
            <Route path="/search/:query">
                <Layout>
                    <SearchScreen/>
                </Layout>
            </Route>
            <Route path="/watch/:id">
                <Layout>
                    <WatchScreen/>
                </Layout>
            </Route>
            <Route>
                <Redirect to="/"/>
            </Route>
        </Switch>
        
    )
}

export default App
