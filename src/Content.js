import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./Content.css";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
      .finally(() => console.log(this.state.items));
  }

  test = (id) => {
    alert("Hahahah " + id);
  };
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Content">
            <Router>
          <div className="nav">
            <ul className="listNav">
            <Link to="/">Home</Link>
              <li>Add Data</li>
              <li>Setting</li>
            </ul>
          </div>
          </Router>
          <div className="contentData">
            {items.map((item) => (
              <div className="contentItem" key={item.id}>
                <p className="title" onClick={() => this.test(item.id)}>
                  {item.title}
                </p>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
