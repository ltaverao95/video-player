import { createSelector } from 'reselect';

import {

    AppState,
    VideoPlayerModel

} from '../domain';

export namespace Selectors{

    export namespace VideoPlayer{

        export const getSelectVideoPlayerViewModel = (appState: AppState): VideoPlayerModel.VideoPlayerViewModel => appState.ui.videoPlayerModule.videoPlayerViewModel;
    }
}