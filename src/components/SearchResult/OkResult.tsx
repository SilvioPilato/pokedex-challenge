import React, { FormEvent, useContext } from 'react';
import { AppContext } from '../../reducers';
import { PokemonImage } from '../PokemonImage';
import { StatBlock } from './StatBlock';


export const OkResult = () => {
    const {currentPokemon, currentSearch, AddPokemonToSelection, selected, maxSelected, ChangeCurrentPokemonColor} = useContext(AppContext);
    const isShiny = currentPokemon?.colorSelected === "shiny";
    const enabledClasses = "button button-outline";
    const disabledClasses = "button button-clear";
    const onButtonClick = (event: FormEvent) => {
        event.preventDefault();
        if (!currentPokemon) return;
        AddPokemonToSelection?.(currentPokemon);
    }
    const setShiny = () => {
        ChangeCurrentPokemonColor?.("shiny");
    }
    const setDefault = () => {
        ChangeCurrentPokemonColor?.("default");
    }
    const isAddDisabled = selected.length >= maxSelected;
    return (
        <div>
            <div>
                <h4>Ecco i tuoi risultati per [{currentSearch}]</h4>
                {
                    currentPokemon &&

                    <div className="container" style={{margin: 0}}>
                        <div className="row">
                            <p style={{textTransform: "capitalize"}} className="column column-33">Nome: {currentPokemon.name}</p>
                            <p className="column column-33">Peso: {currentPokemon.weight}</p>
                            <p className="column column-33">Altezza: {currentPokemon.height}</p>
                        </div>
                        <hr />
                    </div>
                }
            </div>
            <div className="container" style={{margin: 0}}>
                <div className="row">
                    <div
                        className="column"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {
                            currentPokemon &&
                            <PokemonImage pokemon={currentPokemon} size={200}/>
                        }
                        
                        <form onSubmit={onButtonClick} >
                            <input
                                onSubmit={onButtonClick}
                                className="button-primary"
                                type="submit"
                                value="Aggiungilo al pokedex"
                                disabled={isAddDisabled}
                            />
                        </form>

                    </div>
                    <div className="column" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <input className={isShiny ? disabledClasses : enabledClasses} type="submit" value="Default" onClick={setDefault}/>
                        <input className={isShiny ? enabledClasses : disabledClasses} type="submit" value="Shiny" onClick={setShiny}/>
                    </div>
                    <div className="column column-offset-20">
                        <StatBlock  />
                    </div>
                </div>
            </div>
        </div>
    )
}