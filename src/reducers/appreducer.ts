export type AppState = {
  currentPokemon: PokemonState | null,
  currentSearch: string,
  searchState: SearchState
}

export type PokemonState = {
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
  | { type: 'SET_CURRENT_POKEMON', payload: PokemonState }
  | { type: 'SET_CURRENT_SEARCH', payload: string}
  | { type: 'RESET_CURRENT_POKEMON'}
  | { type: 'SET_SEARCH_STATE', payload: SearchState};

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
      default:
        return state
    }
}