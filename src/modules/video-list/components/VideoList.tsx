import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

import {

    Video

} from '../../domain';

import {
    VideoListItem
} from '../../video-list-item/components/VideoListItem';

export interface OwnProps {

}

export interface VideoListProps{
    videosList: Array<Video>;
}

export interface VideoListDispatch{

}

export class VideoList extends React.Component<VideoListProps & VideoListDispatch & OwnProps, undefined>{

    constructor(props: VideoListProps & VideoListDispatch & OwnProps){

        super(props);
    }

    render() {

        return (
            <Panel>
                <VideoListItem videosList={this.props.videosList} />               
            </Panel>
        );
    }
}