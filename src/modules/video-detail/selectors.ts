import { createSelector } from 'reselect';

import {

    AppState,
    VideoDetailModel

} from '../domain';

export namespace Selectors{

    export namespace VideoDetail{

        export const getSelectvideoDetailViewModel = (appState: AppState): VideoDetailModel.VideoDetailViewModel => appState.ui.videoDetailModule.videoDetailViewModel;
    }
}