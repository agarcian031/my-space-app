import { Header, Container, Card, Image, Button, Icon, Divider, CardContent } from "semantic-ui-react";
import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  state = {
    accounts: []
  };

  componentDidMount() {
    axios
      .get("/api/accounts")
      .then((res) => {
        // console.log(res.data)
        this.setState({ accounts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // NOT GENERATING RANDOM SAMPLE 
  // sample = () => {
  //   const { accounts } = this.state;

  //   if (accounts.length) {
  //     const index = Math.floor(Math.random() * accounts.length);
  //     return accounts[index];
  //   } else {
  //     return null;
  //   }
  // };

  followAccount = (id) => {
    const {accounts} = this.state; 
    axios.put(`/api/accounts/${id}`)
    .then(() => {
      this.setState({accounts: accounts.filter(a => a.id !== id)})
    })
  }

  unfollowAccount = (id) => {
    const {accounts} = this.state 
    this.setState({accounts: accounts.filter(a => a.id !== id)})
  }



  render() {
    // const account = this.sample();
    const {accounts} = this.state
    if (accounts) {
      return (
        <Container style={{ padding: "25px 0" }}>
          <Header as="h1" textAlign="center">
            Your Friend Suggestions
          </Header>
          <hr />
          <br />
          <Card.Group>
            {accounts.map (account => 
          <Card key={account.id} raised fluid>
            <Card.Content>
              <Card.Header>{account.name}</Card.Header>
              <Divider/>
              <Card.Meta>
                Age: {account.age} |
                Location: {account.location}
              </Card.Meta>
              <Image floated="left" size="tiny" circular src={account.avatar} />
              <Card.Description textAlign="center">{account.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button.Group size="tiny" floated="right">
              <Button color="green" icon basic  animated onClick={() => this.followAccount(account.id)}>
                <Button.Content visible>Follow</Button.Content>
                <Button.Content hidden>
                <Icon name="plus" />
                </Button.Content>
              </Button>
              <Button  color="red" icon basic animated onClick={() => this.unfollowAccount(account.id)}>
                <Button.Content visible>I don't want to see this</Button.Content>
                <Button.Content hidden><Icon name="minus" /> </Button.Content>
                
              </Button>
              </Button.Group>
            </Card.Content>
          </Card>
          )}
          </Card.Group>
        </Container>
      );
    } else {
      return <Header textAlign="center">You Have No Friends! </Header>;
    }
  }
}

{/* <Link to="/my_cats">
<Button color="blue">
  My Cats
</Button>
</Link> */}

export default Home;
