import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import {

    AppState,
    Actions,
    Selectors,
    VideoDetailModel,
    VideoPlayerModel

} from '../../domain';

import {

    Actions as VideoDetailActions

} from '../../video-detail';

import {

    Actions as VideoPlayerActions

} from '../../video-player';

import { 
    
    OwnProps,
    VideoListProps,
    VideoListDispatch,
    VideoList
    
} from '../components/VideoList';

const mapStateToProps = (appState: AppState): VideoListProps => ({    
    videosList: Selectors.Videos.getVideosList(appState),
    videosDetailList: Selectors.VideosDetail.getVideosDetailList(appState)
});

const mapDispatchToProps = (dispatch: any /*redux.Dispatch<Captions.ManageCaptionViewModel>*/): VideoListDispatch => ({
    updateVideoDetail: (videoDetailViewModel: VideoDetailModel.VideoDetailViewModel) => dispatch(VideoDetailActions.updateVideoDetail(videoDetailViewModel)),
    updateVideoPlayer: (videoPlayerViewModel: VideoPlayerModel.VideoPlayerViewModel) => dispatch(VideoPlayerActions.updateVideoPlayer(videoPlayerViewModel))
});

export const VideoListContainer: React.ComponentClass<OwnProps> =
    connect<VideoListProps, VideoListDispatch, OwnProps>(mapStateToProps, mapDispatchToProps)(VideoList);