import { createSelector } from 'reselect';

import {

    AppState,
    VideoSearchBar as VideoSearchBarModule

} from '../domain';

export namespace Selectors{

    export namespace VideoSearchBar{

        export const getSelectVideoSearchViewModel = (appState: AppState): VideoSearchBarModule.VideoSearchViewModel => appState.ui.videoSearchBarModule.videoSearchViewModel;
    }
}