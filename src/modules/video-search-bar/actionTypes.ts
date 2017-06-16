import {

    VideoSearchBar

} from '../domain';

export namespace ActionTypes{

    export namespace Types{
        export type STORE_YOUTUBE_VIDEOS = "video-search-bar/STORE_YOUTUBE_VIDEOS";
    }

    export const STORE_YOUTUBE_VIDEOS: Types.STORE_YOUTUBE_VIDEOS = "video-search-bar/STORE_YOUTUBE_VIDEOS";

    export type Action = 

        {type: Types.STORE_YOUTUBE_VIDEOS, videoSearchViewModel: VideoSearchBar.VideoSearchViewModel}
}