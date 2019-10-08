import React, { Component } from "react";
import DogCard from '../Components/DogCard'

class DogList extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogs: []
    }
    this.getDogs()
  }

  getDogs = () => {
    fetch("http://localhost:4000/dogs")
    .then(resp => resp.json())
    .then(dogs => {
      let dogsArray = dogs.map(dog => <DogCard key={dog.id} dog={dog} />)
      this.setState({
        dogs: dogsArray
      })
    })
  }

  render() {
    return (
      <div className="dogContainer">
        {this.state.dogs}
      </div>
    )
  }
}

export default DogList;
