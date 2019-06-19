import React, { Component } from 'react'; 
import {AuthConsumer} from '../../providers/AuthProvider'; 
import {Menu, Icon} from 'semantic-ui-react'; 
import {Link, withRouter} from 'react-router-dom'; 

const Navbar = (props) => {

  const rightNavItems = ({user, handleLogout}) => {
    if (user) {
      return (
        <Menu.Menu position="right">
          <Link to="/my_accounts">
          <Menu.Item>
            {/* <Icon name="users"/> */}
            My Friends
          </Menu.Item>
          </Link>
          <Menu.Item 
            name="Logout"
            onClick={() => handleLogout(props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
          <Menu.Item
          name="Login"
          active={props.location.pathname === "/login"}>
           <Icon name='user circle outline' />
            Login
          </Menu.Item>
          </Link>
          <Link to="/register">
          <Menu.Item
          name="Sign Up"
          active={props.location.pathname === "/register"}>
            <Icon name="pencil"/> Sign Up
          </Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }
  }; 

  return (
    <AuthConsumer>
      {auth => 
      <Menu stackable pointing secondary>
        <Menu.Item>
          <Icon name="users"/>|
          MySpace
        </Menu.Item>
        <Link to="/">
          <Menu.Item
          name="Home"
          active={props.location.pathname === "/"}>
            <Icon name="home"/>
          </Menu.Item>
        </Link>
        { rightNavItems(auth)}
      </Menu>
    }
      
    </AuthConsumer>
  )
}; 

export default withRouter(Navbar);
