import React, { useContext } from 'react';
import { AppContext } from '../../reducers';
import { SearchState } from '../../reducers/appreducer';
import { LoadingResult } from './LoadingResult';
import { NotFoundResult } from './NotFoundResult';
import { OkResult } from './OkResult';

export const SearchResult = () => {
    const {searchState} = useContext(AppContext);
    const componentsMap = {
        [SearchState.DEFAULT]: <div />,
        [SearchState.NOT_FOUND]: <NotFoundResult />,
        [SearchState.FOUND]: <OkResult />,
        [SearchState.LOADING]: <LoadingResult />,
    };

    return (
        <div>
            {
                componentsMap[searchState]
            }
        </div>
    )
}