import {

    ActionTypes

} from './';

import {

    Services

} from './';

import {

    VideoSearchBar

} from '../domain';

export namespace Actions {

    export const storeVideos = (videoSearchViewModel: VideoSearchBar.VideoSearchViewModel) => ({
        type: ActionTypes.STORE_YOUTUBE_VIDEOS,
        videoSearchViewModel
    });

    export const storeVideosResult = (videoSearchViewModel: VideoSearchBar.VideoSearchViewModel) => {

        return (dispatch: any, getStateNotTyped) => {

            const videoSearchBarServices = new Services.VideoSearchBarServices(dispatch, getStateNotTyped);
            videoSearchBarServices.storeVideosResult(videoSearchViewModel);
        }
    }
}