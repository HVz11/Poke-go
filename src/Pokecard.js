import React, { Component } from "react";
import './Pokecard.css';

const POKI_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKI_API}${this.props.id}.png`; // for adding pokemon image
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name}/>
        <div>Type: {this.props.type}</div>
        <div>EXp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
