import { createStore, Action, Dispatch, Middleware, Store as ReduxStore } from 'redux';
import * as u from 'updeep';

import {

    AppState,
    Actions as DomainActions,
    VideoSearchBar,
    Video,
    VideoDetail,
    VideoComplete,
    Selectors as DomainSelectors

} from '../domain';

import {

    Actions,
    ActionTypes,
    Selectors

} from './';

export namespace Services {

    export class VideoSearchBarServices {

        private dispatch: any;
        private getState: () => AppState;

        constructor(dispatch?: any, getStore?) {

            if (dispatch) {
                this.dispatch = dispatch;
            }

            if (getStore) {
                this.getState = getStore;
            }
        }

        storeVideosResult(videoSearchViewModel: VideoSearchBar.VideoSearchViewModel) {

            this.dispatch(Actions.storeVideos(videoSearchViewModel));

            let videoSearchViewModelSelector: VideoSearchBar.VideoSearchViewModel = Selectors.VideoSearchBar.getSelectVideoSearchViewModel(this.getState());

            if (!this.areValidVideosResultList(videoSearchViewModelSelector)) {
                return;
            }

            this.storeVideos(videoSearchViewModelSelector);
        }

        private areValidVideosResultList(videoSearchViewModelSelector: VideoSearchBar.VideoSearchViewModel): boolean {

            if (!videoSearchViewModelSelector ||
                !videoSearchViewModelSelector.videoSearchDTO ||
                !videoSearchViewModelSelector.videoSearchDTO.searchResult ||
                videoSearchViewModelSelector.videoSearchDTO.searchResult.length == 0) {
                return false;
            }

            return true;
        }

        private storeVideos(videoSearchViewModelSelector: VideoSearchBar.VideoSearchViewModel){


            videoSearchViewModelSelector.videoSearchDTO.searchResult.map((videoDTO: VideoSearchBar.VideoDTO) => {

                this.storeVideo(videoDTO);
                this.storeVideoDetail(videoDTO);
                this.storeVideoComplete(videoDTO);
            });
        }

        private storeVideo(videoDTO: VideoSearchBar.VideoDTO){

            let video = new Video();

            video.id = DomainSelectors.Videos.getNextVideoId(this.getState()).toString();
            video.title = video.title;
            video.videoImgUrl = videoDTO.imageUrl;
            video.videoDetailId = DomainSelectors.VideosDetail.getNextVideoDetailId(this.getState());

            this.dispatch(DomainActions.storeVideo(video));
        }

        private storeVideoDetail(videoDTO: VideoSearchBar.VideoDTO){

            let videoDetail = new VideoDetail();

            videoDetail.id = DomainSelectors.VideosDetail.getNextVideoDetailId(this.getState());
            videoDetail.detail = videoDTO.detail;
            videoDetail.url = videoDTO.url;

            this.dispatch(DomainActions.storeVideoDetail(videoDetail));
        }

        private storeVideoComplete(videoDTO: VideoSearchBar.VideoDTO){

            let videoComplete = new VideoComplete();

            videoComplete.id = DomainSelectors.VideosComplete.getNextVideoCompleteId(this.getState());
            videoComplete.videoId = DomainSelectors.Videos.getNextVideoId(this.getState());
            videoComplete.videoDetailId = DomainSelectors.VideosDetail.getNextVideoDetailId(this.getState());

            this.dispatch(DomainActions.storeVideoComplete(videoComplete));
        }
    }
}