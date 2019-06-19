import React, {Fragment} from 'react'; 
import Home from './components/layout/Home'; 
import NoMatch from './components/layout/NoMatch'; 
import Navbar from './components/layout/Navbar'; 
import Login from './components/layout/Login'; 
import Register from './components/layout/Register'; 
import FetchUser from './components/layout/FetchUser';
import ProtectedRoute from './components/layout/ProtectedRoute';
import MyAccounts from './components/MyAccounts'; 


import {Switch, Route} from 'react-router-dom'; 
import {Container} from 'semantic-ui-react'; 

const App = () => (
  <Fragment> 
    <Navbar/>
    <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path="/my_accounts" component={MyAccounts}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>

)

export default App

