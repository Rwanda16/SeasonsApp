import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Always call setState to update state object
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  //**We have to always define render but not the constructor**
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
