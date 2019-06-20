import React, { Component, Fragment } from 'react'; 
import axios from 'axios'; 
import {Header, Segment, Icon, Image, Divider} from 'semantic-ui-react'; 
// will render the user profile with posts
// pull the id from match params... 

export class AccountProfile extends Component {
    state = {
      posts: [], 
      account: []
    }

    componentDidMount(id) {
      const account_id = this.props.match.params.id
      axios.get(`/api/accounts/${account_id}`)
      .then(res => {
        this.setState({account: res.data})
      })
    }
    

  render() {
    const {account} = this.state
    return (
      <Fragment>
        <Segment.Group horizontal>
          <Segment raised compact >
          <Image centered circular src={account.avatar}/>

          </Segment>
        <Segment  padded="very" raised >
          <Header as="h1" textAlign="left">{account.name}</Header>
          <Divider/>
          <Segment.Group>
            <Segment tertiary>
              <p><Icon name="hourglass"/> {account.age}</p>
            </Segment>
            <Segment tertiary>
              <p><Icon name="map marker alternate"/> {account.location}</p>
            </Segment>
            <Segment tertiary>
              <p>{account.bio}</p>
            </Segment>
          </Segment.Group>
        </Segment>
        </Segment.Group>
      </Fragment>
    )
  }
}

export default AccountProfile
