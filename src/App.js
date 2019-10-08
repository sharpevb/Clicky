import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import captains from "./captains.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    captains
  };

  componentDidMount() {
  }

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.captains.forEach(card => {
      card.count = 0;
    });
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.captains.find((o, i) => {
      if (o.id === id) {
        if(captains[i].count === 0){
          captains[i].count = captains[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            if (this.state.score >= 8) {
              alert("You won!" + "\nWould you like to play again?");
              this.setState({score: 0});
              this.setState({topScore: 0});
              return true
            }
            console.log(this.state.score);
          });
          this.state.captains.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Nav
          current={this.state.score}
          top={this.state.topScore}
        />
        <Wrapper>
          {this.state.captains.map(captains => (
            <Card
              onClick={this.clickCount}
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
