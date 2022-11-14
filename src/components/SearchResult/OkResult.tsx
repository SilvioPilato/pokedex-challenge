import React from 'react';

type Props = {
    url: string,
    pokemonName: string
}

export const OkResult: React.FC<Props> = ({url, pokemonName}) => {

    return (
        <div>
            <img width={200} height={"auto"} alt='a pokemon' src={url}></img>
        </div>
    )
}