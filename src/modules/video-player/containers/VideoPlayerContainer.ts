import * as React from 'react';
import * as redux from 'redux';
import { Action } from 'redux';
import { connect } from 'react-redux';

import {

    AppState,    

} from '../../domain';

/*import {
    Actions
} from '../actions';

import {
    Selectors
} from '../selectors';*/

import { 
    VideoPlayer
} from '../components/VideoPlayer';

interface OwnProps {

}

interface VideoPlayerProps{
    
}

const mapStateToProps = (appState: AppState): VideoPlayerProps => ({    
    
});

interface VideoPlayerDispatch{

}

const mapDispatchToProps = (dispatch: any /*redux.Dispatch<Captions.ManageCaptionViewModel>*/): VideoPlayerDispatch => ({
    
});

export const VideoPlayerContainer: React.ComponentClass<OwnProps> =
    connect<VideoPlayerProps, VideoPlayerDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoPlayer);