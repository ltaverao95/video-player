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
    VideoHome
} from '../components/VideoHome';

interface OwnProps {

}

interface VideoHomeProps{
    
}

const mapStateToProps = (appState: AppState): VideoHomeProps => ({    
    //manageCaptionViewModel:Selectors.ManageCaption.getManageCaptionViewModel(appState)
});

interface VideoHomeDispatch{

}

const mapDispatchToProps = (dispatch: any /*redux.Dispatch<Captions.ManageCaptionViewModel>*/): VideoHomeDispatch => ({
    //storeCaptionsFn: (storeCaptionParamsDTO: Captions.StoreCaptionParamsDTO) => dispatch(Actions.storeCaptions(storeCaptionParamsDTO))
});

export const VideoHomeContainer: React.ComponentClass<OwnProps> =
    connect<VideoHomeProps, VideoHomeDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoHome);