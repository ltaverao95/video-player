import {

    ActionTypes,
    Video,
    VideoDetail,
    VideoComplete

} from './';

export namespace Actions{

    export const storeVideo = (video: Video) => ({
        type: ActionTypes.ADD_VIDEO,
        video
    });

    export const storeVideoDetail = (videoDetail: VideoDetail) => ({
        type: ActionTypes.ADD_VIDEO_DETAIL,
        videoDetail
    });

    export const storeVideoComplete = (videoComplete: VideoComplete) => ({
        type: ActionTypes.ADD_VIDEO_COMPLETED,
        videoComplete
    });
}