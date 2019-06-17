import React, { Component } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export class AuthProvider extends Component {
  state = {
    user: null
  };


  // Makes a post request to "/api/auth/sign_in" to authenticate a user. 
  handleLogin = (user, history) => {
    axios
      .post("api/auth/sign_in", user)
      .then((res) => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Makes a delete request to "/api/auth/sign_out" to logout a user.
  handleLogout = (history) => {
    axios
      .delete("api/auth/sign_out")
      .then((res) => {
        this.setState({ user: null });
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Makes a post request to "/api/auth" to create a user. 
  handleRegister = (user, history) => {
    axios
      .post("/api/auth", user)
      .then((res) => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { user } = this.state;
    return (
      <AuthContext.Provider
        value={{
          user,
          authenticated: user != null, //will check is user is logged in or not. 
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleRegister: this.handleRegister,
          setUser: (user) => this.setState({ user }) //will get the user from the database and set the user to that state. 
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const AuthConsumer = AuthContext.Consumer;
