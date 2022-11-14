import React, { useContext } from 'react';
import { AppContext } from '../../reducers';
import { StatBlock } from './StatBlock';


export const OkResult = () => {
    const {currentPokemon, currentSearch} = useContext(AppContext);
    const url = currentPokemon?.sprites.front_default || undefined;
    return (
        <div style={{display: "flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h5>Ecco i tuoi risultati per [{currentSearch}]</h5>
                <img width={200} height={"auto"} alt='a pokemon' src={url}></img>
                <input className="button-primary" type="submit" value="Aggiungilo al pokedex"/>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <input className="button button-outline" type="submit" value="Default"/>
                <input className="button button-outline" type="submit" value="Shiny"/>
            </div>
            <StatBlock />
        </div>
    )
}