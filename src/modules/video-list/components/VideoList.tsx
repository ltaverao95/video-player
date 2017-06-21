import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

import {

    Video,
    VideoDetail,
    VideoDetailModel,
    VideoPlayerModel

} from '../../domain';

import {
    VideoListItem
} from '../../video-list-item/components/VideoListItem';

export interface OwnProps {
    
}

export interface VideoListProps{
    videosList: Array<Video>;
    videosDetailList: Array<VideoDetail>;
}

export interface VideoListDispatch{
    updateVideoDetail: (videoDetailViewModel: VideoDetailModel.VideoDetailViewModel) => void;
    updateVideoPlayer: (videoPlayerViewModel: VideoPlayerModel.VideoPlayerViewModel) => void;
}

export class VideoList extends React.Component<VideoListProps & VideoListDispatch & OwnProps, undefined>{

    render() {

        return (
            <Panel>
                <VideoListItem videosList={this.props.videosList}
                               videosDetailList={this.props.videosDetailList}
                               updateVideoDetail={this.props.updateVideoDetail}
                               updateVideoPlayer={this.props.updateVideoPlayer} />               
            </Panel>
        );
    }
}