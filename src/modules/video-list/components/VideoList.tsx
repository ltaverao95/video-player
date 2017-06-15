import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

import {
    VideoListItem
} from '../../video-list-item/components/VideoListItem';

export class VideoList extends React.Component<undefined, undefined>{

    render() {

        return (
            <Panel>
                <VideoListItem />               
            </Panel>
        );
    }
}