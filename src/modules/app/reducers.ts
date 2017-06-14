import { Reducer, combineReducers } from 'redux';

import {

    //State
    UI

} from '../domain';

import * as VideoSearchBar from '../video-search-bar';

export namespace Reducers {

    export const ui: Reducer<UI> = combineReducers<UI>({
        videoSearchBarModule: VideoSearchBar.Reducers.videoSearchBarModule
    });
}