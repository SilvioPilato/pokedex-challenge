import React, { useContext } from 'react';
import { AppContext } from '../../reducers';
import { PokemonImage } from '../PokemonImage';
import { ImageWrap } from './ImageWrap';

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
        const filledComponents = getFilledSlots();
        let emptySlots = [];
        const remainingSlots = maxSelected - filledComponents.length ;
        for (let i = maxSelected - remainingSlots; i < maxSelected; i++) {
            emptySlots.push(
                <div key={`pokeslot-${i}`} style={{display: "flex", marginRight:"1em"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <ImageWrap size={70}>
                            <PokemonImage size={50}/>
                        </ImageWrap>
                        {/* <input className="button button-outline" type="submit" value="Elimina" disabled/> */}
                    </div>
                </div>
            )
        }
        return filledComponents.concat(emptySlots);
    }

    const getFilledSlots = () => {
        return selected.map((pokemon, index) => {
            return (
                <div key={`pokeslot-${index}`} style={{display: "flex", marginRight:"1em"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <ImageWrap size={70}>
                        <PokemonImage pokemon={pokemon} size={50} onClick={onShowClick(index)}/>
                    </ImageWrap>
                    {/* <input className="button button-outline" type="submit" value="Elimina" onClick={onRemoveClick(index)}/> */}
                    </div>
                </div>
            )
        });
    }
    return (
        <div>
            <h4>Il tuo pokedex</h4>
            <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                getSlots()
            }
            </div>
        </div>
        
    )
}