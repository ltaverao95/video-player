import * as React from 'react';
import {
    Panel,
    Media
} from 'react-bootstrap';

import {

    Selectors,
    Video,
    VideoDetail,
    VideoDetailModel,
    VideoPlayerModel

} from '../../domain';

interface OwnProps {
    videosList: Array<Video>;
    videosDetailList: Array<VideoDetail>;
    updateVideoDetail: (videoDetailViewModel: VideoDetailModel.VideoDetailViewModel) => void;
    updateVideoPlayer: (videoPlayerViewModel: VideoPlayerModel.VideoPlayerViewModel) => void;
}

export class VideoListItem extends React.Component<OwnProps, undefined>{

    render() {

        return (
            <div>
                {
                    this.getContent()
                }
            </div>
        );
    }

    private getContent() {
        
        if (!this.props.videosList ||
            this.props.videosList.length == 0) {
            return <span></span>
        }

        return this.props.videosList.map((video: Video, index: number) => {
            return (
                <Panel key={index}>
                    <Media>
                        <Media.Left align="top">
                            <img width={64} 
                                 height={64} 
                                 src={video.videoImgUrl} 
                                 alt="Image"
                                 style={{cursor: 'pointer'}}
                                 onClick={this.onClick.bind(this, video)} />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{video.title}</Media.Heading>
                        </Media.Body>
                    </Media>
                </Panel>
            );
        });
    }

    private onClick(video: Video){

        if(!video){
            return;
        }

        let videoDetailViewModel = new VideoDetailModel.VideoDetailViewModel();
        let videoPlayerViewModel = new VideoPlayerModel.VideoPlayerViewModel();

        videoDetailViewModel.videoSelected = this.props.videosDetailList.find((videoDetail: VideoDetail) => videoDetail.id == video.videoDetailId);
        videoPlayerViewModel.videoSelected = videoDetailViewModel.videoSelected;

        this.props.updateVideoDetail(videoDetailViewModel);
        this.props.updateVideoPlayer(videoPlayerViewModel);
    }
}