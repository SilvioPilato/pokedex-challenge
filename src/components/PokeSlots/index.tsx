import React, { useContext } from 'react';
import { AppContext } from '../../reducers';

export const PokeSlots = () => {
    const {selected} = useContext(AppContext);
    
    return (
        <div>
            <h4>Il tuo pokedex</h4>
            {
                selected.map((pokemon, index) => {
                    return (
                        <div key={`pokeslot-${index}`} style={{display: "flex"}}>
                            <div>
                                <img alt='a selected pokemon' src={pokemon.sprites?.front_default || ""}></img>
                                <input className="button-primary" type="submit" value="Mostra"/>
                                <input className="button button-outline" type="submit" value="Elimina"/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    )
}