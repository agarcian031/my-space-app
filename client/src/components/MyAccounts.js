import React, { Component, Fragment} from "react";
import {Link } from 'react-router-dom';  
import { Card, Feed, Divider, Button, Icon} from "semantic-ui-react";
import axios from 'axios'; 

// TODO: be able to remove/clear activity feed without removing people from DB 

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
          <Card.Header>Your Recent Activity</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            {accounts.map( account => 
            <Fragment>
            <Feed.Event>
              <Feed.Label image={account.avatar} />
              <Feed.Content>
                <Feed.Date content="Now Following" />
                <Feed.Summary>
                  You added  
                  <span> <Link to="/account_profile">
                  {account.name} 
                  </Link> </span>
                   to your friends list.
                </Feed.Summary>
                <Button icon floated="right" size="tiny"> 
                  <Icon name="erase"/>
                </Button>
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
