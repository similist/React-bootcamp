import React, {Component} from 'react';
import './Pokecard.css';
//const Poke_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const Poke_API ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
	render(){
		let ImgSrc = `${Poke_API}${padToThree(this.props.id)}.png`;
		return(
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Pokecard-image">
					<img src={ImgSrc} alt={this.props.name}/>
				</div>
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">Exp: {this.props.exp}</div>
			</div>
		)
	}
}

export default Pokecard;