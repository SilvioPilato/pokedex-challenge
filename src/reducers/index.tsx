import React, { useReducer, createContext } from 'react';
import appreducer, { PokemonState } from './appreducer';

type Props = {
    children: JSX.Element
}
  
interface IAppContext {
    currentPokemon: PokemonState | null,
    currentSearch: string,
    SetCurrentPokemon: (pokemon: PokemonState) => void,
    ResetCurrentPokemon: () => void,
    SetCurrentSearch: (search: string) => void
}


const initialState = {
    currentPokemon: null,
    currentSearch: ""
}

export const AppContext = createContext<Partial<IAppContext>>(initialState); 

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(appreducer, initialState);
    const SetCurrentPokemon = (pokemon: PokemonState) => {
        dispatch({
            type: "SET_CURRENT_POKEMON",
            payload: pokemon
        })
    }
    const ResetCurrentPokemon = () => {
        dispatch({
            type: "RESET_CURRENT_POKEMON"
        })
    }
    const SetCurrentSearch = (search: string) => {
        dispatch({
            type: "SET_CURRENT_SEARCH",
            payload: search
        })
    }
    const contextValue = {
        currentPokemon: state.currentPokemon,
        currentSearch: "",
        SetCurrentPokemon,
        ResetCurrentPokemon,
        SetCurrentSearch
    }
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    )
}
  