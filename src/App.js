import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: parseInt(this.props.age)
    };
  }

  birthday = e =>{
    this.setState({age: this.state.age + 1});
  }

  render(){
    return(
      <div className = "cards">
        <div className = "cardtext">
          <h3>{this.props.lastName}, {this.props.firstName}</h3>
          <p>Age: {this.state.age}</p>
          <p>Hair Color: {this.props.hairColor}</p>        
          </div>
        <button onClick={this.birthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
      </div>
    )
  }

}

function App() {
  return (
    <div>
      <PersonCard 
        firstName = "Jane"
        lastName = "Doe"
        age = "45"
        hairColor="Black"
      />
      <PersonCard 
        firstName = "John"
        lastName = "Smith"
        age = "88"
        hairColor="Brown"
      />
      <PersonCard 
        firstName = "Millard"
        lastName = "Fillmore"
        age = "50"
        hairColor="Brown"
      />
      <PersonCard 
        firstName = "Maria"
        lastName = "Smith"      
        age = "62"
        hairColor="Brown"
      />      
    </div>
  );
}

export default App;
