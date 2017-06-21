import { Reducer, combineReducers } from 'redux';

import {

    Services

} from './';

import {
    
    VideoPlayerModule,
    VideoPlayerModel

} from '../domain';

import {

    ActionTypes

} from './';

export namespace Reducers {

    export namespace VideoPlayer {

        export const videoPlayerReducer = (state: VideoPlayerModel.VideoPlayerViewModel = new VideoPlayerModel.VideoPlayerViewModel(), action: ActionTypes.Action): VideoPlayerModel.VideoPlayerViewModel => {

            switch(action.type)
            {
                case ActionTypes.UPDATE_VIDEO_PLAYER:
                return {
                    ...state,
                    videoSelected: action.videoPlayerViewModel.videoSelected
                }
            }

            return state;
        }
    }

    export const videoPlayerModule: Reducer<VideoPlayerModule> = combineReducers<VideoPlayerModule>({
        videoPlayerViewModel: VideoPlayer.videoPlayerReducer
    });
}