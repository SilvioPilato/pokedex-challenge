import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../reducers';
export const SearchBar = () => {
    const {SetCurrentPokemon, ResetCurrentPokemon, SetCurrentSearch} = useContext(AppContext)
    const [pokeText, setPokeText] = useState("");
    const pokedexAPIUrl = "https://pokeapi.co/api/v2/pokemon";

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPokeText(event.currentTarget.value);
    }
    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        SetCurrentSearch?.(pokeText);
        const url = `${pokedexAPIUrl}/${pokeText}`
        const response = await fetch(url);
        if (!response.ok) {
            ResetCurrentPokemon?.();
            return;
        }

        const decoded = await response.json();
        SetCurrentPokemon?.({
            sprites: {
                front_default: decoded.sprites.front_default,
                front_shiny: decoded.sprites.front_shiny,
            }
        });
    }
    
    return (
        <form>
            <fieldset>
                <label htmlFor="searchbar">Cerca un pokemon</label>
                <input type="text" placeholder="e.g.: bulbasaur" id="searchbar" onSubmit={onSubmit} onChange={onChange}/>
                <input className="button-primary" type="submit" value="Send" onClick={onSubmit}/>
            </fieldset>
        </form>
    );
}