import React from 'react';
import { Pokemon } from '../../reducers/reducer';
import EmptyIcon from "../../pokeball_icon.svg";
type Props = {
    pokemon?: Pokemon
    size?: number;
}

export const PokemonImage: React.FC<Props> = ({size, pokemon}) => {
    const isEmpty = !Boolean(pokemon);
    const isShiny = pokemon?.colorSelected === "shiny";
    const opacity = isEmpty ? "10%" : "100%";
    const getSrc = () => {
        if (isEmpty) return EmptyIcon;
        return isShiny ? pokemon.sprites.front_shiny : pokemon?.sprites.front_default;
    }
    return (
        <img
            width={size}
            height={size}
            alt='a pokemon'
            src={getSrc()}
            style={{opacity: opacity}}
        ></img>
    )
}