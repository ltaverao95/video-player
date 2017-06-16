import { Reducer, combineReducers } from 'redux';

import {

    Services

} from './';

import {
    VideoSearchBarModule,
    VideoSearchBar as VideoSearchBarDomain
} from '../domain';

import {

    ActionTypes

} from './';

export namespace Reducers {

    export namespace VideoSearchBar {

        export const videoSearchBarReducer = (state: VideoSearchBarDomain.VideoSearchViewModel = new VideoSearchBarDomain.VideoSearchViewModel(), action: ActionTypes.Action): VideoSearchBarDomain.VideoSearchViewModel => {

            switch(action.type)
            {
                case ActionTypes.STORE_YOUTUBE_VIDEOS:
                return {
                    ...state,
                    videoSearchDTO: action.videoSearchViewModel.videoSearchDTO
                }
            }

            return state;
        }
    }

    export const videoSearchBarModule: Reducer<VideoSearchBarModule> = combineReducers<VideoSearchBarModule>({
        videoSearchViewModel: VideoSearchBar.videoSearchBarReducer
    });
}