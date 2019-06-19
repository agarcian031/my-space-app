import {Header, Container, Card, Image, Button, Icon} from 'semantic-ui-react'; 
import React, { Component } from 'react'
import axios from 'axios';
 class Home extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    axios.get('/api/users')
    .then(res => {
      console.log(res)
      // this.setState({users: res.data}) 
    })
    .catch( err => {
      console.log(err); 
    })
  }
  

  render() {
    return (
      <Container style={{padding: '25px 0'}}> 
      <Header as="h1" textAlign="center">MySpace</Header>
      <hr/>
      </Container>
    )
  }
}

export default Home; 

