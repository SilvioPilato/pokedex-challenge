export type AppState = {
  currentPokemon: Pokemon | null,
  currentSearch: string,
  searchState: SearchState,
  selected: Pokemon[],
  maxSelected: number
}

export type PokemonColor = "default"|"shiny";

export type Pokemon = {
  weight: number,
  height: number,
  sprites: Sprites,
  name: string,
  stats: PokemonStats[],
  colorSelected: PokemonColor
}

export type PokemonStats = {
  base_stat: number,
  stat: {
    name : string,
    url: string
  }
}

export type Sprites = {
    front_default: string,
    front_shiny: string,
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
  | { type: 'CHANGE_CURRENT_POKEMON_COLOR', payload: PokemonColor}

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
        return {...state, selected: [...state.selected, action.payload]};
      case 'REMOVE_POKEMON_FROM_SELECTION':
        return {...state, selected: state.selected.filter((_, index) => index !== action.payload)};
      case 'CHANGE_CURRENT_POKEMON_COLOR':
        const currentPokemon = state.currentPokemon ? {...state.currentPokemon, colorSelected: action.payload} : null;
        return {...state, currentPokemon};
      default:
        return state
    }
}