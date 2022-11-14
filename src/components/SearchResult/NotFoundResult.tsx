import React, { useContext } from 'react';
import { AppContext } from '../../reducers';


export const NotFoundResult = () => {
    const {currentSearch} = useContext(AppContext);
    return (
        <div style={{display: "flex"}}>
            <h5>Spiacente, non abbiamo trovato nulla per [{currentSearch}] :(</h5>
        </div>
    )
}