import React from 'react';
import { SearchBar } from './components/Searchbar';
import { SearchResult } from './components/SearchResult';
import { AppProvider } from './reducers';

export const App = () => {
    return (
        <AppProvider>
            <div>
                <SearchBar />
                <SearchResult />
            </div>
        </AppProvider>
    );
}