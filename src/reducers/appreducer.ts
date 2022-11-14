export type AppState = {
  currentPokemon: PokemonState | null,
  currentSearch: string
}

export type PokemonState = {
  sprites: Sprites
}

export type Sprites = {
    front_default: string | null,
    front_shiny: string | null,
}

export type PokemonAction = 
  | { type: 'SET_CURRENT_POKEMON', payload: PokemonState }
  | { type: 'SET_CURRENT_SEARCH', payload: string}
  | { type: 'RESET_CURRENT_POKEMON'};

export default function reducer(state: AppState, action: PokemonAction) {
    switch (action.type) {
      case 'SET_CURRENT_POKEMON':
        return {...state, currentPokemon: action.payload};
      case 'RESET_CURRENT_POKEMON':
          return {...state, currentPokemon: null};
      case 'SET_CURRENT_SEARCH':
          return {...state, currentSearch: action.payload};
      default:
        return state
    }
}