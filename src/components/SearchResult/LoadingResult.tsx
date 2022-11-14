import React, { useContext } from 'react';
import { AppContext } from '../../reducers';


export const LoadingResult = () => {
    const {currentSearch} = useContext(AppContext);
    return (
        <div style={{display: "flex"}}>
            <h5>Sto cercando dei risultati per [{currentSearch}]...</h5>
        </div>
    )
}