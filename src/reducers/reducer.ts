export type AppState = {
  currentPokemon: Pokemon | null,
  currentSearch: string,
  searchState: SearchState,
  selected: Pokemon[]
}

export type Pokemon = {
  sprites: Sprites,
  name: string,
  stats: PokemonStats[]
}

export type PokemonStats = {
  base_stat: number,
  stat: {
    name : string,
    url: string
  }
}

export type Sprites = {
    front_default: string | null,
    front_shiny: string | null,
}

export enum SearchState {
  DEFAULT,
  FOUND,
  NOT_FOUND,
  LOADING,
}

export type PokemonAction = 
  | { type: 'SET_CURRENT_POKEMON', payload: Pokemon }
  | { type: 'SET_CURRENT_SEARCH', payload: string}
  | { type: 'RESET_CURRENT_POKEMON'}
  | { type: 'SET_SEARCH_STATE', payload: SearchState}
  | { type: 'ADD_POKEMON_TO_SELECTION', payload: Pokemon}
  | { type: 'REMOVE_POKEMON_FROM_SELECTION', payload: number}

export default function reducer(state: AppState, action: PokemonAction) {
    switch (action.type) {
      case 'SET_CURRENT_POKEMON':
        return {...state, currentPokemon: action.payload};
      case 'RESET_CURRENT_POKEMON':
          return {...state, currentPokemon: null};
      case 'SET_CURRENT_SEARCH':
          return {...state, currentSearch: action.payload};
      case 'SET_SEARCH_STATE':
            return {...state, searchState: action.payload};
      case 'ADD_POKEMON_TO_SELECTION':
            console.log([...state.selected, action.payload]);
            return {...state, selected: [...state.selected, action.payload]};
      case 'REMOVE_POKEMON_FROM_SELECTION':
            return {...state, selected: state.selected.filter((_, index) => index !== action.payload)};
      default:
        return state
    }
}