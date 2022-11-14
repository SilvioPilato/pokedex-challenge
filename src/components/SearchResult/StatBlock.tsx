import React, { useContext } from 'react';
import { AppContext } from '../../reducers';


export const StatBlock = () => {
    const {currentPokemon} = useContext(AppContext);
    const stats = currentPokemon?.stats ? currentPokemon.stats : [];
    return (
        <div style={{marginLeft: "1em", display: "flex", flexDirection: 'column'}}>
            <h5>Statistiche</h5>
            {
                stats.map((stat, index) => {
                    return (
                        <span key={`statrow-${index}`}>
                            <p style={{fontSize: "1em", margin: "auto", fontWeight: "bold"}}>
                                {stat.stat.name}
                            </p>
                            <progress value={stat.base_stat} max={100}/>
                        </span>
                    )
                })
            }
        </div>
    )
}