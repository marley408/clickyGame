import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class CounterHeader extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      count: 0
    };
  
    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
    };
  
  
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <div className="container">
          <div className="card text-center">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title"> Clicky Game</h3>
              <p className="card-text">Score: {this.props.score} | Top Score: {this.props.topScores}</p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default CounterHeader;