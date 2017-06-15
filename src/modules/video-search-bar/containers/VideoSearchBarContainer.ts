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
    VideoSearchBar
} from '../components/VideoSearchBar';

interface OwnProps {

}

interface VideoSearchBarProps{
    
}

const mapStateToProps = (appState: AppState): VideoSearchBarProps => ({    
    
});

interface VideoSearchBarDispatch{

}

const mapDispatchToProps = (dispatch: any /*redux.Dispatch<Captions.ManageCaptionViewModel>*/): VideoSearchBarDispatch => ({
    
});

export const VideoSearchBarContainer: React.ComponentClass<OwnProps> =
    connect<VideoSearchBarProps, VideoSearchBarDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoSearchBar);