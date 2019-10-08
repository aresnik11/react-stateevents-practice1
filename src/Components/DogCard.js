import React from "react";

class DogCard extends React.Component {
  state = {
    ruff: false
  }

  setRuff = () => {
    this.setState({ruff: !this.state.ruff})
  }

  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.setRuff}>Bark</button>
        {this.state.ruff ? <h2 className="bark">Ruff</h2> : null}
      </div>
    );
  }
}

export default DogCard;
