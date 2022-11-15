import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../reducers';
import { SearchState } from '../../reducers/reducer';
export const SearchBar = () => {
    const {SetCurrentPokemon, ResetCurrentPokemon, SetCurrentSearch, SetSearchState} = useContext(AppContext)
    const [pokeText, setPokeText] = useState("");
    const pokedexAPIUrl = "https://pokeapi.co/api/v2/pokemon";

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPokeText(event.currentTarget.value);
    }
    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!pokeText) return;
        SetCurrentSearch?.(pokeText);
        SetSearchState?.(SearchState.LOADING);
        const url = `${pokedexAPIUrl}/${pokeText}`
        const response = await fetch(url);
        if (!response.ok) {
            SetSearchState?.(SearchState.NOT_FOUND);
            ResetCurrentPokemon?.();
            return;
        }
        
        const decoded = await response.json();
        SetCurrentPokemon?.({
            height: decoded.height,
            weight: decoded.weight,
            colorSelected: "default",
            name: decoded.name,
            stats: decoded.stats,
            sprites: {
                front_default: decoded.sprites.front_default,
                front_shiny: decoded.sprites.front_shiny,
            }
        });
        SetSearchState?.(SearchState.FOUND);
    }
    
    return (
        <form>
            <fieldset>
                <h4>Cerca un pokemon</h4>
                <input type="text" placeholder="e.g.: bulbasaur" id="searchbar" onSubmit={onSubmit} onChange={onChange}/>
                <input className="button-primary" type="submit" value="Send" onClick={onSubmit}/>
            </fieldset>
        </form>
    );
}