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
    VideoList
} from '../components/VideoList';

interface OwnProps {

}

interface VideoListProps{
    
}

const mapStateToProps = (appState: AppState): VideoListProps => ({    
    
});

interface VideoListDispatch{

}

const mapDispatchToProps = (dispatch: any /*redux.Dispatch<Captions.ManageCaptionViewModel>*/): VideoListDispatch => ({
    
});

export const VideoListContainer: React.ComponentClass<OwnProps> =
    connect<VideoListProps, VideoListDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoList);