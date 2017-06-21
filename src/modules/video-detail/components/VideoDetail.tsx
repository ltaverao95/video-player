import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

import {

    VideoDetail as VideoDetailDomain,
    VideoDetailModel,
    Video

} from '../../domain';

export interface OwnProps {
    
}

export interface VideoDetailProps {
    videoDetailViewModel: VideoDetailModel.VideoDetailViewModel;
}

export interface VideoDetailDispatch {
    
}

export class VideoDetail extends React.Component<VideoDetailProps & VideoDetailDispatch & OwnProps, undefined>{

    constructor(props: VideoDetailProps & VideoDetailDispatch & OwnProps) {
        super(props);
    }

    render() {


        return (

            <Panel>
                <h4>{this.props.videoDetailViewModel.videoSelected.title}</h4>
                <p>{this.props.videoDetailViewModel.videoSelected.description}</p>
            </Panel>
        );
    }
}