import React, { useState } from "react";
import "./Content.css";
function Content() {
  const test = () => {
      let a = prompt("Masukan Nilai pertama: ")
      let b = prompt("Masukan Nilai kedua: ")
      let hasil = parseInt(a)+parseInt(b);
      return hasil;

  }
  const [name, setName] = useState("Tidak Ada Nama");
  
  
  
  return (
    <div className="Content">
      
      <p>Jumlah  {name} !</p>
      <button onClick={() => setName(test())}>Click me</button>
    </div>
  );
}


export default Content;



class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }