import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import captains from "./captains.json";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    captains
  };


  // this.setState({})
  render() {
    const shuffledPics = shuffleArray(this.state.captains);
    const handleClick = (id) => {
      console.log(id);
      this.shuffledPics(captains);
    }

    return (
      <div className="App">
        <Nav
          current={this.state.currentScore}
          top={this.state.topScore}
        />
        <Wrapper>
          {shuffledPics.map(captains => (
            <Card
              onClick={handleClick}
              id={captains.id}
              key={captains.id}
              image={captains.image}
            />
          ))}
        </Wrapper>
      </div>

    );
  }


}


export default App;
