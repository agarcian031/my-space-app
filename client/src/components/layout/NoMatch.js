import React from 'react'; 
import {Link} from 'react-router-dom'; 
import {Header, Container} from 'semantic-ui-react'; 

const NoMatch = () => {
  return (
    <Container style={{padding: '250px 0'}}>
      <Header as="h3" textAlign="center">Error 404: Page Not Found. Return 
        <Link to="/"> Home</Link>
      </Header>
    </Container>
  )
}


export default NoMatch
