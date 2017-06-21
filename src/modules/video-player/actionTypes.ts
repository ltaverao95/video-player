import {

    VideoPlayerModel

} from '../domain';

export namespace ActionTypes{

    export namespace Types{
        export type UPDATE_VIDEO_PLAYER = "video-player/UPDATE_VIDEO_PLAYER";
    }

    export const UPDATE_VIDEO_PLAYER: Types.UPDATE_VIDEO_PLAYER = "video-player/UPDATE_VIDEO_PLAYER";

    export type Action = 

        {type: Types.UPDATE_VIDEO_PLAYER, videoPlayerViewModel: VideoPlayerModel.VideoPlayerViewModel}
}