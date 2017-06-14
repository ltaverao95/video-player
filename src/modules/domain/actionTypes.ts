import {

    Video,
    VideoDetail,
    VideoComplete

} from './';

export namespace ActionTypes{

    export namespace Types{

        export type ADD_VIDEO = "domain/ADD_VIDEO";
        export type ADD_VIDEO_DETAIL = "domain/ADD_VIDEO_DETAIL";
        export type ADD_VIDEO_COMPLETED = "domain/ADD_VIDEO_COMPLETED";
    }

    export const ADD_VIDEO: Types.ADD_VIDEO = "domain/ADD_VIDEO";
    export const ADD_VIDEO_DETAIL: Types.ADD_VIDEO_DETAIL = "domain/ADD_VIDEO_DETAIL";
    export const ADD_VIDEO_COMPLETED: Types.ADD_VIDEO_COMPLETED = "domain/ADD_VIDEO_COMPLETED";

    export type Action = 
        {type: Types.ADD_VIDEO, video: Video} |
        {type: Types.ADD_VIDEO_DETAIL, videoDetail: VideoDetail} |
        {type: Types.ADD_VIDEO_COMPLETED, videoComplete: VideoComplete}
}