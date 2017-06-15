import * as React from 'react';
import {
    Grid,
    Row,
    Col,
    Panel,
    Media
} from 'react-bootstrap';

import {
    VideoSearchBarContainer
} from '../../video-search-bar/containers/VideoSearchBarContainer';

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
                    <Col xs={12} md={12}>
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                                <Row className="show-grid">
                                    <Col xs={12} md={12}>
                                        <Panel>
                                            Video
                                        </Panel>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Panel>
                                            <h4>Video Title</h4>
                                            <p>Video Description</p>
                                        </Panel>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} md={6}>
                                <Panel>
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
                                </Panel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }

}