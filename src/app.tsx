import React from 'react';
import { PokeSlots } from './components/PokeSlots';
import { SearchBar } from './components/Searchbar';
import { SearchResult } from './components/SearchResult';
import { AppProvider } from './reducers';

export const App = () => {
    return (
        <AppProvider>
            <div style={{margin: "1em"}}>
                <SearchBar />
                <SearchResult />
                <PokeSlots />
            </div>
        </AppProvider>
    );
}