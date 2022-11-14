import React, { useReducer, createContext } from 'react';
import appreducer, { AppState, Pokemon, SearchState } from './reducer';

type Props = {
    children: JSX.Element
}

type ContextActions = {
    SetCurrentPokemon: (pokemon: Pokemon) => void,
    ResetCurrentPokemon: () => void,
    SetCurrentSearch: (search: string) => void,
    SetSearchState: (nextState: SearchState) => void,
    AddPokemonToSelection: (pokemon: Pokemon) => void,
    RemovePokemonFromSelection: (slotId: number) => void,
}
  
type IAppContext = AppState & Partial<ContextActions>;

const initialState: AppState = {
    currentPokemon: null,
    currentSearch: "",
    searchState: SearchState.DEFAULT,
    selected: []
}

export const AppContext = createContext<IAppContext>(initialState); 

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(appreducer, initialState);
    const SetCurrentPokemon = (pokemon: Pokemon) => {
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

    const AddPokemonToSelection = (pokemon: Pokemon) => {
        dispatch({
            type: "ADD_POKEMON_TO_SELECTION",
            payload: pokemon
        })
    }

    const RemovePokemonFromSelection = (slotId: number) => {
        dispatch({
            type: "REMOVE_POKEMON_FROM_SELECTION",
            payload: slotId
        })
    }
    const contextValue = {
        currentPokemon: state.currentPokemon,
        currentSearch: state.currentSearch,
        searchState: state.searchState,
        selected: state.selected,
        SetCurrentPokemon,
        ResetCurrentPokemon,
        SetCurrentSearch,
        SetSearchState,
        AddPokemonToSelection,
        RemovePokemonFromSelection
    }
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    )
}
  