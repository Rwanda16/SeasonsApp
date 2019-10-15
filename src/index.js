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
    return (
      <div>
        Latitude:{this.state.lat}
        <br />
        Error: {this.state.errMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
