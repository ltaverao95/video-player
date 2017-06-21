import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

import {

    VideoPlayerModel

} from '../../domain';

export interface OwnProps {
    
}

export interface VideoPlayerProps{
    videoPlayerViewModel: VideoPlayerModel.VideoPlayerViewModel;
}

export interface VideoPlayerDispatch{

}

export class VideoPlayer extends React.Component<VideoPlayerProps & VideoPlayerDispatch & OwnProps, undefined>{

    constructor(props: VideoPlayerProps & VideoPlayerDispatch & OwnProps){
        super(props);
    }

    render() {

        return (
            <Panel>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={"https://www.youtube.com/embed/" + this.props.videoPlayerViewModel.videoSelected.url} className="embed-responsive-item"></iframe>
                </div>
            </Panel>
        );
    }
}