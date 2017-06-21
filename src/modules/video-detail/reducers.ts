import { Reducer, combineReducers } from 'redux';

import {

    Services

} from './';

import {
    VideoDetailModule,
    VideoDetailModel
} from '../domain';

import {

    ActionTypes

} from './';

export namespace Reducers {

    export namespace VideoDetail {

        export const videoDetailReducer = (state: VideoDetailModel.VideoDetailViewModel = new VideoDetailModel.VideoDetailViewModel(), action: ActionTypes.Action): VideoDetailModel.VideoDetailViewModel => {

            switch(action.type)
            {
                case ActionTypes.UPDATE_VIDEO_DETAIL:
                return {
                    ...state,
                    videoSelected: action.videoDetailViewModel.videoSelected
                }
            }

            return state;
        }
    }

    export const videoDetailModule: Reducer<VideoDetailModule> = combineReducers<VideoDetailModule>({
        videoDetailViewModel: VideoDetail.videoDetailReducer
    });
}