import {

    ActionTypes

} from './';

import {

    Services

} from './';

import {

    Video,
    VideoPlayerModel

} from '../domain';

export namespace Actions {

    export const updateVideoPlayer = (videoPlayerViewModel: VideoPlayerModel.VideoPlayerViewModel) => ({
        type: ActionTypes.UPDATE_VIDEO_PLAYER,
        videoPlayerViewModel
    });
}