import { Reducer, combineReducers } from 'redux';

import {
    VideoSearchBarModule,
    VideoSearchBar as VideoSearchBarDomain
} from '../domain';

import {

    //ActionTypes
    ActionTypes

} from './';

export namespace Reducers {

    export namespace VideoSearchBar {

        export const videoSearchBarReducer = (state: VideoSearchBarDomain.VideoSearchViewModel = new VideoSearchBarDomain.VideoSearchViewModel(), action: ActionTypes.Action): VideoSearchBarDomain.VideoSearchViewModel => {

            return state;
        }
    }

    export const videoSearchBarModule: Reducer<VideoSearchBarModule> = combineReducers<VideoSearchBarModule>({
        videoSearchViewModel: VideoSearchBar.videoSearchBarReducer
    });
}