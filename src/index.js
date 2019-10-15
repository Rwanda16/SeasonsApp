import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Always call setState to update state object
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  //**We have to always define render but not the constructor**
  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
