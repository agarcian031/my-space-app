import React, { Component } from "react";
import { Card, Feed } from "semantic-ui-react";
import axios from 'axios'; 

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
            <Feed.Event>
              <Feed.Label image={account.avatar} />
              <Feed.Content>
                <Feed.Date content="Now Following" />
                <Feed.Summary>
                  You added {account.name} to your friends list.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
            )}
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

export default MyAccounts;
