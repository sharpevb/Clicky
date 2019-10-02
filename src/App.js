import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import captains from "./captains.json";

class App extends Component {
  state = {
    captains
  };

  render() {
    return (

      <div className="App">
        <Nav />
        <Wrapper>
          {this.state.captains.map(captains => (
            <FriendCard
              image={captains.image}
            />
          ))}
        </Wrapper>
      </div>

    );
  }

}


export default App;
