import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div className = "cards">
        <div className = "cardtext">
          <h3>{this.props.name}</h3>
          <p>{this.props.age}</p>
          <p>{this.props.hairColor}</p>        
        </div>
      </div>
    )
  }

}

function App() {
  return (
    <div>
      <PersonCard 
        name = "Doe, Jane"
        age = "45"
        hairColor="Black"
      />
      <PersonCard 
        name = "Smith, John"
        age = "88"
        hairColor="Brown"
      />
      <PersonCard 
        name = "Fillmore, Millard"
        age = "50"
        hairColor="Brown"
      />
      <PersonCard 
        name = "Smith, Maria"
        age = "62"
        hairColor="Brown"
      />      
    </div>
  );
}

export default App;
