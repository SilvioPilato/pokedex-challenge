import React, { FormEvent, useContext } from 'react';
import { AppContext } from '../../reducers';
import { StatBlock } from './StatBlock';


export const OkResult = () => {
    const {currentPokemon, currentSearch, AddPokemonToSelection} = useContext(AppContext);
    const url = currentPokemon?.sprites.front_default || undefined;
    const onButtonClick = (event: FormEvent) => {
        event.preventDefault();
        if (!currentPokemon) return;
        AddPokemonToSelection?.(currentPokemon);
    }
    return (
        <div style={{display: "flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h5>Ecco i tuoi risultati per [{currentSearch}]</h5>
                <img width={200} height={"auto"} alt='a pokemon' src={url}></img>
                <form onSubmit={onButtonClick}>
                    <input onSubmit={onButtonClick} className="button-primary" type="submit" value="Aggiungilo al pokedex"/>
                </form>

            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <input className="button button-outline" type="submit" value="Default"/>
                <input className="button button-outline" type="submit" value="Shiny"/>
            </div>
            <StatBlock />
        </div>
    )
}