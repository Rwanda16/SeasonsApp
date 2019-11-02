import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; //100% the same as a constructor function

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //Always call setState to update state object
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  //**We have to always define render but not the constructor**
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message='Please accept Location request' />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
