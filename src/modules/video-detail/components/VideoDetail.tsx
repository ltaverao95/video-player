import * as React from 'react';
import {
    Panel
} from 'react-bootstrap';

export class VideoDetail extends React.Component<undefined, undefined>{

    render() {

        return (
            <Panel>
                <h4>Video Title</h4>
                <p>Video Description Detail</p>
            </Panel>
        );
    }
}