import * as React from 'react';
import {
    Panel,
    Media
} from 'react-bootstrap';

export class VideoListItem extends React.Component<undefined, undefined>{

    render() {

        return (
            <div>
                <Panel>
                    <Media>
                        <Media.Left align="top">
                            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Top aligned media</Media.Heading>
                        </Media.Body>
                    </Media>
                </Panel>
                <Panel>
                    <Media>
                        <Media.Left align="top">
                            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Top aligned media</Media.Heading>
                        </Media.Body>
                    </Media>
                </Panel>
                <Panel>
                    <Media>
                        <Media.Left align="top">
                            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Top aligned media</Media.Heading>
                        </Media.Body>
                    </Media>
                </Panel>
            </div>
        );
    }
}