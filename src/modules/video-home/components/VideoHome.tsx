import * as React from 'react';

import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

import {
    VideoSearchBarContainer
} from '../../video-search-bar/containers/VideoSearchBarContainer';

import {
    VideoPlayerContainer
} from '../../video-player/containers/VideoPlayerContainer';

import {
    VideoDetail
} from '../../video-detail/components/VideoDetail';

import {
    VideoListContainer
} from '../../video-list/containers/VideoListContainer';

export class VideoHome extends React.Component<undefined, undefined>{

    render() {

        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <Row className="show-grid">
                            <div className="col-md-6 col-md-offset-3">
                                <VideoSearchBarContainer />
                            </div>
                        </Row>
                    </Col>

                    <br/> <br/> <br/>

                    <Col xs={12} md={12}>
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                                <Row className="show-grid">
                                    <Col xs={12} md={12}>
                                        <VideoPlayerContainer />
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <VideoDetail />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} md={6}>
                                <VideoListContainer />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }   

}