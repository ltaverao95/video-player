import * as React from 'react';
import {
    Panel,
    Media
} from 'react-bootstrap';

import {

    Video

} from '../../domain';

interface OwnProps {
    videosList: Array<Video>;
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
                            <img width={64} height={64} src={video.videoImgUrl} alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{video.title}</Media.Heading>
                        </Media.Body>
                    </Media>
                </Panel>
            );
        });
    }
}