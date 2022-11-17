import React, { CSSProperties } from 'react';
import { Pokemon } from '../../reducers/reducer';
type Props = {
    pokemon: Pokemon
    size?: number;
    onClick?: () => void;
    style?: CSSProperties;
    className?: string;
}

export const PokemonImage: React.FC<Props> = ({size, pokemon, onClick, style, className}) => {
    const isShiny = pokemon?.colorSelected === "shiny";
    const getSrc = () => {
        return isShiny ? pokemon.sprites.front_shiny : pokemon?.sprites.front_default;
    }
    return (
        <img
            className={className}
            onClick={onClick}
            width={size}
            height={size}
            alt='a pokemon'
            src={getSrc()}
            style={style}
        ></img>
    )
}