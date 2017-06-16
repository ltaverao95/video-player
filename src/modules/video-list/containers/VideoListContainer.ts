import * as React from 'react';
import * as redux from 'redux';
import { Action } from 'redux';
import { connect } from 'react-redux';

import {

    AppState,
    Actions,
    Selectors

} from '../../domain';

import { 
    
    OwnProps,
    VideoListProps,
    VideoListDispatch,
    VideoList
    
} from '../components/VideoList';



const mapStateToProps = (appState: AppState): VideoListProps => ({    
    videosList: Selectors.Videos.getVideosList(appState)
});

const mapDispatchToProps = (dispatch: any /*redux.Dispatch<Captions.ManageCaptionViewModel>*/): VideoListDispatch => ({
    
});

export const VideoListContainer: React.ComponentClass<OwnProps> =
    connect<VideoListProps, VideoListDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoList);