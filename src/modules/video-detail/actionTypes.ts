import {

    VideoDetailModel

} from '../domain';

export namespace ActionTypes{

    export namespace Types{
        export type UPDATE_VIDEO_DETAIL = "video-detail/UPDATE_VIDEO_DETAIL";
    }

    export const UPDATE_VIDEO_DETAIL: Types.UPDATE_VIDEO_DETAIL = "video-detail/UPDATE_VIDEO_DETAIL";

    export type Action = 

        {type: Types.UPDATE_VIDEO_DETAIL, videoDetailViewModel: VideoDetailModel.VideoDetailViewModel}
}