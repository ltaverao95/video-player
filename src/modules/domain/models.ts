import {

    //Models
    EntityMap,
    EntityNormalizedObj
} from '../utils';

interface IdEntityBase {
    id: string;
}

class Video{
    id: string;
    title: string;
    videoImgUrl: string;
    videoDetailId: string;
}

class VideoDetail{
    id: string;
    detail: string;
    url: string;
}

class VideoComplete{
    id: string;
    videoId: string;
    videoDetailId: string;
}

class CommonConfiguration{
    videosMap: EntityNormalizedObj<Video>;
    videoDetailMap: EntityNormalizedObj<VideoDetail>;
    videoComplete: EntityNormalizedObj<VideoComplete>;
}

class InterfaceConfiguration{
    commonConfiguration: CommonConfiguration;
}

export {
    
    Video,
    VideoDetail,
    VideoComplete,
    CommonConfiguration,
    InterfaceConfiguration,
    IdEntityBase
}