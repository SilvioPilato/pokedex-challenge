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
                <div className='container' style={{margin: 0}}>
                    <div className='row'>
                        <div className='column column-66'>
                            <SearchResult />
                        </div>
                        <div className='column column-33'>
                            <PokeSlots />
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
}