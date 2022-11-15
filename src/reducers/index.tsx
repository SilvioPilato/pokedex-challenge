import React, { useReducer, createContext } from 'react';
import appreducer, { AppState, Pokemon, PokemonColor, SearchState } from './reducer';

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
    ChangeCurrentPokemonColor: (color: PokemonColor) => void,
}
  
type IAppContext = AppState & Partial<ContextActions>;

const initialState: AppState = {
    currentPokemon: null,
    currentSearch: "",
    searchState: SearchState.DEFAULT,
    selected: [],
    maxSelected: 10
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
    const ChangeCurrentPokemonColor = (color: PokemonColor) => {
        dispatch({
            type: "CHANGE_CURRENT_POKEMON_COLOR",
            payload: color
        })
    }

    const contextValue = {
        currentPokemon: state.currentPokemon,
        currentSearch: state.currentSearch,
        searchState: state.searchState,
        selected: state.selected,
        maxSelected: state.maxSelected,
        SetCurrentPokemon,
        ResetCurrentPokemon,
        SetCurrentSearch,
        SetSearchState,
        AddPokemonToSelection,
        RemovePokemonFromSelection,
        ChangeCurrentPokemonColor
    }
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    )
}
  