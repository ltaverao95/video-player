import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import {

    AppState,

    VideoPlayerModel

} from '../../domain';

import {
    Selectors
} from '../selectors';

import { 
    
    VideoPlayer,
    VideoPlayerProps,
    VideoPlayerDispatch,
    OwnProps

} from '../components/VideoPlayer';

const mapStateToProps = (appState: AppState): VideoPlayerProps => ({    
    videoPlayerViewModel: Selectors.VideoPlayer.getSelectVideoPlayerViewModel(appState)
});

const mapDispatchToProps = (dispatch: redux.Dispatch<VideoPlayerModel.VideoPlayerViewModel>): VideoPlayerDispatch => ({
    
});

export const VideoPlayerContainer: React.ComponentClass<OwnProps> =
    connect<VideoPlayerProps, VideoPlayerDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoPlayer);