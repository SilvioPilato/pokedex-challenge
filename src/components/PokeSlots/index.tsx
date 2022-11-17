import React, { useContext } from 'react';
import { AppContext } from '../../reducers';
import { PokemonImage } from '../PokemonImage';
import { ImageWrap } from './ImageWrap';
import './styles.css';

export const PokeSlots = () => {
    const {selected, SetCurrentPokemon, RemovePokemonFromSelection, maxSelected} = useContext(AppContext);
    const onShowClick = (id: number) => {
        return () => {
            SetCurrentPokemon?.(selected[id]);
        }
    }
    const onRemoveClick = (id: number) => {
        return () => {
            RemovePokemonFromSelection?.(id);
        }
    }
    const getSlots = () => {
        const filledSlots = selected.length;
        let components = [];
        for (let i = 0; i < maxSelected; i++) {
            const isEmpty = i >= filledSlots;
            const onRemove = isEmpty ? undefined : onRemoveClick(i);
            const isDisabled = isEmpty ? true : false;
            const pokemon = isEmpty ? undefined : selected[i];
            components.push(
                <div key={`pokeslot-${i}`} style={{display: "flex"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <ImageWrap className='imgwrapper' size={70}>
                        {
                            pokemon && 
                            <PokemonImage
                                className='pokeimg'
                                pokemon={pokemon}
                                size={60}
                                onClick={onShowClick(i)}
                            />
                        }
                    </ImageWrap>
                    {
                        <input 
                            className={"button button-clear"}
                            style={{padding: 0, lineHeight: "normal", height: "1.8rem"}}
                            type="submit" 
                            value="Elimina" 
                            disabled={isDisabled}
                            onClick={onRemove}/> 
                    }
                    </div>
                </div>
            )
        }
        return components;
    }

    return (
        <div>
            <h4>Il tuo pokedex</h4>
            <div className={"pokeslots"}>
            {
                getSlots()
            }
            </div>
        </div>
        
    )
}