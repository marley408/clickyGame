import React from "react";
import CounterHeader from "./components/CounterHeader";
import Jumbo from "./components/Jumbotron";
import ImgCards from "./components/ImgCards";
import Friends from './friends.json';


// const App = () => (

  
//   <div>
//     <CounterHeader></CounterHeader>
//     <Jumbo></Jumbo>
//     <ImgCards></ImgCards>
//   </div>

// )

class App extends React.Component {
  state = {
    topScores: [0],
    score: 0,
    shuffledFriends: Friends,
    alreadyClicked: [],
  }

  constructor() {
    super();
    console.log(this.state)
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  selectFriend = async (friend) => {
    console.log(friend);
    
    let newScore = this.state.score;
    let imgs = [...this.state.alreadyClicked];
    
    // check if the current item is already in the "alreadyClicked array"
    if (imgs.includes(friend)) {
      newScore = 0;
      imgs = [];
      console.log("GAME OVER");
    } else {
      newScore = newScore + 1;
      imgs.push(friend);
    }
    
    const shuffledFriends = this.shuffleArray(Friends);
    await this.setState({ 
      alreadyClicked: imgs, 
      shuffledFriends: shuffledFriends,
      score: newScore
    });

    console.log(this.state)
  }

  render(){
    return (
      <div>
        <CounterHeader score={this.state.score} topScore={this.state.topScore}></CounterHeader>
        <Jumbo></Jumbo>
        <ImgCards friends={this.state.shuffledFriends} selectFriend={this.selectFriend}></ImgCards>
      </div>
    )
  }
}

export default App;
