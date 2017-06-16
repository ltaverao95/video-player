import * as React from 'react';
import * as redux from 'redux';
import { Action } from 'redux';
import { connect } from 'react-redux';

import {

    AppState,
    VideoSearchBar as VideoSearchBarModule

} from '../../domain';

import {

    Actions

} from '../';

import {
    Selectors
} from '../selectors';

import { 
    VideoSearchBar,
    VideoSearchBarProps,
    VideoSearchBarDispatch,
    OwnProps
} from '../components/VideoSearchBar';

const mapStateToProps = (appState: AppState): VideoSearchBarProps => ({    
    videoSearchViewModel: Selectors.VideoSearchBar.getSelectVideoSearchViewModel(appState)
});

const mapDispatchToProps = (dispatch: redux.Dispatch<VideoSearchBarModule.VideoSearchViewModel>): VideoSearchBarDispatch => ({
    storeVideosResult: (videoSearchViewModel: VideoSearchBarModule.VideoSearchViewModel) => dispatch(Actions.storeVideosResult(videoSearchViewModel))
});

export const VideoSearchBarContainer: React.ComponentClass<OwnProps> =
    connect<VideoSearchBarProps, VideoSearchBarDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoSearchBar);