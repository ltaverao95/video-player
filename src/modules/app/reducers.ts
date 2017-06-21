import { Reducer, combineReducers } from 'redux';

import {

    //State
    UI

} from '../domain';

import * as VideoSearchBar from '../video-search-bar';
import * as VideoDetail from '../video-detail';
import * as VideoPlayer from '../video-player';

export namespace Reducers {

    export const ui: Reducer<UI> = combineReducers<UI>({
        videoSearchBarModule: VideoSearchBar.Reducers.videoSearchBarModule,
        videoDetailModule: VideoDetail.Reducers.videoDetailModule,
        videoPlayerModule: VideoPlayer.Reducers.videoPlayerModule
    });
}