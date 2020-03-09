import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './Components/User'
import './App.css';


/* class ApiData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: [],
      steam: [],
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount(){
    console.log("blah");
    axios.get(`/api/getUserInfo`)
    .then(res => {
      this.setState({ steam: res.data });
    })
  };

  handleChange(event){
    this.setState({ name: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    var thing = fetch(`/api/getUserInfo`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          name: result.response.players
        });
      });
  }
  render(){
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input id="name" type="text"
        value={this.state.name}
        onChange={this.handleChange} />
        <button type="submit">submit</button>
      </form>
      <ul>
        {this.state.name.map(thing => <li>{thing.personaname}</li>)}
      </ul>
      <ul>
        {this.state.steam.map(item => (
          <li>key={item.objectID}
            <a href={item.url}>{item.title}</a>
            </li>
        ))}
      </ul>
      </div>
    )
  }

} */


function App() {
  const [data, setData] = useState({});
  return( <UserInfo />)
}
/*   useEffect(() => {
      const result = axios.get(
        '/api/getUserInfo',
      );

      setData(result.data);
    }, []);

  console.log("Here is the stuff:", data); 
  return 
    <div className="App">
      <header className="App-header">
        <p>
          Steam Account Project CS419
        </p>
      <ul>
        {data.map(item => (
          <li>key={item.objectID}
            <a href={item.url}>{item.title}</a>
            </li>
        ))}
      </ul>
      </header>
    </div>
  : <ApiData />;
}
*/
export default App;
//574F7810E04E32E957BD5947BC5A6CB0