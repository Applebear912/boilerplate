// create class conpoment
// goals: 1. fetch photo of the day from nasa api, and display it on our page (done)
// 2. create an option of saving the photo to database if the client want to do so

import React from "react";
import axios from "axios";

// console.log(API_KEY);
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // - what to display: image, title, explaination, date and what's their datatype
      image: "", // url
      title: "",
      explanation: "",
      date: "",
    };
  }

  componentDidMount() {
    // setting state
    // when load page, get the photo of the day from nasa API (invoke get photo method)
    this.getPhoto();
  }

  getPhoto() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=OCNM6w9b9xwzEP0NLyAhNmv6zhDen0RUUtYdWEE7"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          image: response.data.url,
          title: response.data.title,
          explanation: response.data.explanation,
          date: response.data.date,
        });
      })
      .catch(console.error);
  }

  savePhoto() {
    const { image, title, explanation, date } = this.state;
    axios
      .post("/photo", { image, title, explanation, date })
      .then((result) => {
        console.log("Result of POST:", result.data);
      })
      .catch(console.error);
  }

  render() {
    return (
      <main>
        <h1>Astronomy Picture of the Day</h1>
        <h2>{this.state.title}</h2>
        <img src={this.state.image} />
        <p>{this.state.explaination}</p>
        <p>{this.state.date}</p>
        <input
          type="submit"
          value="Save Photo"
          onClick={() => {
            this.savePhoto();
          }}
        />
      </main>
    );
  }
}

export default App;
