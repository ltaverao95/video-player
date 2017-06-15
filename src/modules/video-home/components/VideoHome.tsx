import * as React from 'react';
import axios from 'axios';
import YTSearch from 'youtube-api-search';

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

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyAvucYb8pcxTx20CHE6StwLF8iGT76K1RA';

export class VideoHome extends React.Component<undefined, undefined>{

    render() {

        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <Row className="show-grid">
                            <div className="col-md-6 col-md-offset-3">
                                <VideoSearchBarContainer onVideoSearchBarTitleChanged={this.onVideoSearchBarTitleChanged} />
                            </div>
                        </Row>
                    </Col>
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

    private onVideoSearchBarTitleChanged(value: string){

        const params = {
            part: 'snippet',
            key: API_KEY,
            q: value,
            type: 'video'
        };

        const request = axios.get(YOUTUBE_URL, { params: params });

        request.then((data: any) => {
            console.log(data.data);
        });
    }   

}