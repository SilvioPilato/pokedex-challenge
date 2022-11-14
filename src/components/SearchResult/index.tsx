import React, { useContext } from 'react';
import { AppContext } from '../../reducers';
import { OkResult } from './OkResult';

export const SearchResult = () => {
    const {currentPokemon, currentSearch} = useContext(AppContext);
    const isPokemonFound = currentPokemon != null;
    const currentSpriteUrl = currentPokemon?.sprites.front_default;
    return (
        <div>
            {isPokemonFound && currentSpriteUrl && currentSearch &&
                <OkResult pokemonName={currentSearch} url={currentSpriteUrl} />
            }
        </div>
    )
}