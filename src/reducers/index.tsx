import React, { useReducer, createContext } from 'react';
import appreducer, { AppState, PokemonState, SearchState } from './appreducer';

type Props = {
    children: JSX.Element
}

type ContextDispatch = {
    SetCurrentPokemon: (pokemon: PokemonState) => void,
    ResetCurrentPokemon: () => void,
    SetCurrentSearch: (search: string) => void,
    SetSearchState: (nextState: SearchState) => void,
}
  
type IAppContext = AppState & Partial<ContextDispatch>;

const initialState: AppState = {
    currentPokemon: null,
    currentSearch: "",
    searchState: SearchState.DEFAULT
}

export const AppContext = createContext<IAppContext>(initialState); 

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
    const SetSearchState = (nextState: SearchState) => {
        dispatch({
            type: "SET_SEARCH_STATE",
            payload: nextState
        })
    }
    const contextValue = {
        currentPokemon: state.currentPokemon,
        currentSearch: state.currentSearch,
        searchState: state.searchState,
        SetCurrentPokemon,
        ResetCurrentPokemon,
        SetCurrentSearch,
        SetSearchState
    }
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    )
}
  