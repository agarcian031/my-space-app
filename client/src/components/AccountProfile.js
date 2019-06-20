import React, { Component, Fragment } from "react";
import axios from "axios";
import Spinner from "./layout/Spinner";
import { Header, Segment, Icon, Image, Divider } from "semantic-ui-react";
// will render the user profile with posts
// pull the id from match params...

export class AccountProfile extends Component {
  state = {
    posts: [],
    account: []
  };

  // Nested axios request to get both account information and posts
  componentDidMount(id) {
    const account_id = this.props.match.params.id;
    axios
      .get(`/api/accounts/${account_id}`)
      .then((res) => {
        this.setState({ account: res.data });

        return axios.get(`/api/accounts/${account_id}/posts`).then((res) => {
          this.setState({ posts: res.data });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { account, posts } = this.state;
    if (account === undefined || posts === undefined || Object.keys(account).length === 0 || Object.keys(posts).length === 0) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Segment.Group horizontal>
            <Segment raised compact>
              <Image centered circular src={account.avatar} />
            </Segment>
            <Segment padded="very" raised>
              <Header as="h1" textAlign="left">
                {account.name}
              </Header>
              <Divider />
              <Segment.Group>
                <Segment tertiary>
                  <p>
                    <Icon name="hourglass" /> {account.age}
                  </p>
                </Segment>
                <Segment tertiary>
                  <p>
                    <Icon name="map marker alternate" /> {account.location}
                  </p>
                </Segment>
                <Segment tertiary>
                  <p>{account.bio}</p>
                </Segment>
              </Segment.Group>
            </Segment>
          </Segment.Group>
          <Segment.Group raised>
            <Header as="h2" textAlign="center" style={{padding: '15px 0'}}>{account.name}'s Posts</Header>
            {posts.map((post) => (
              <Segment padded="very" key={post.id}>
                <Segment raised>
                  <Header as="h3" textAlign="center">
                    {post.title}
                  </Header>
                  <Divider />
                  <Segment tertiary>{post.body}</Segment>
                </Segment>
              </Segment>
            ))}
          </Segment.Group>
        </Fragment>
      );
    }
  }
}

export default AccountProfile;
