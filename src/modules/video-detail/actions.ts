import {

    ActionTypes

} from './';

import {

    Services

} from './';

import {

    Video,
    VideoDetailModel

} from '../domain';

export namespace Actions {

    export const updateVideoDetail = (videoDetailViewModel: VideoDetailModel.VideoDetailViewModel) => ({
        type: ActionTypes.UPDATE_VIDEO_DETAIL,
        videoDetailViewModel
    });
}