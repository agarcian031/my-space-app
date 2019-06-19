import React, { Component, Fragment} from "react";
import {Link } from 'react-router-dom';  
import { Card, Feed, Divider, Button, Icon} from "semantic-ui-react";
import axios from 'axios'; 
import Moment from 'react-moment'; 


// TODO: be able to remove/clear activity feed
// TODO: unfriend user.
// pull ID from match.params

export class MyAccounts extends Component {
  state = {
    accounts: []
  };

  componentDidMount() {
    axios.get("api/my_accounts").then((res) => {
      this.setState({ accounts: res.data });
    });
  }

  render() {
    const { accounts } = this.state;
    return (
      <Card centered fluid>
        <Card.Content>
          <Card.Header style={{padding: '10px 0'}}>Now Following...</Card.Header>
          {/* <Button icon circular floated="right" size="tiny"> 
                  <Icon name="settings"/>
                </Button> */}
        </Card.Content>
        <Card.Content>
          <Feed>
            {accounts.map( account => 
            <Fragment>
            <Feed.Event>
              <Feed.Label image={account.avatar} />
              <Feed.Content>
                <Feed.Date><Moment format="MM/DD/YYYY">{account.created_at}</Moment></Feed.Date>
                <Feed.Summary>
                  You added  
                  <span> <Link to={`/account_profile/${account.id}`}>
                  {account.name} 
                  </Link> </span>
                   to your follow list. 
                   <br/>
                   Click their name to view their profile. 
                   <Button icon circular floated="right" size="tiny" color="red">
                    <Icon name="trash"/>
                   </Button>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            <Divider/>
            </Fragment>
            )}
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

export default MyAccounts;
