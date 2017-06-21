import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import {

    AppState,
    VideoDetailModel

} from '../../domain';

import {

    Selectors

} from '../';

import { 
    VideoDetail,
    VideoDetailProps,
    VideoDetailDispatch,
    OwnProps
} from '../components/VideoDetail';

import {

    Actions

} from '../';

const mapStateToProps = (appState: AppState): VideoDetailProps => ({    
    videoDetailViewModel: Selectors.VideoDetail.getSelectvideoDetailViewModel(appState)
});

const mapDispatchToProps = (dispatch: redux.Dispatch<VideoDetailModel.VideoDetailViewModel>): VideoDetailDispatch => ({
    
});

export const VideoDetailContainer: React.ComponentClass<OwnProps> =
    connect<VideoDetailProps, VideoDetailDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoDetail);