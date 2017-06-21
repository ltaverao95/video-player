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
        private nextId: number;

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

            this.nextId = 0;

            videoSearchViewModelSelector.videoSearchDTO.searchResult.map((videoDTO: VideoSearchBar.VideoDTO) => {

                this.nextId++;

                this.storeVideoComplete(videoDTO);
                this.storeVideo(videoDTO);
                this.storeVideoDetail(videoDTO);
            });
        }

        private storeVideo(videoDTO: VideoSearchBar.VideoDTO){

            let video = new Video();

            video.id = this.nextId.toString();
            video.title = videoDTO.title;
            video.videoImgUrl = videoDTO.imageUrl;
            video.videoDetailId = this.nextId.toString();

            this.dispatch(DomainActions.storeVideo(video));
        }

        private storeVideoDetail(videoDTO: VideoSearchBar.VideoDTO){

            let videoDetail = new VideoDetail();

            videoDetail.id = this.nextId.toString();
            videoDetail.description = videoDTO.detail;
            videoDetail.title = videoDTO.title
            videoDetail.url = videoDTO.url;

            this.dispatch(DomainActions.storeVideoDetail(videoDetail));
        }

        private storeVideoComplete(videoDTO: VideoSearchBar.VideoDTO){

            let videoComplete = new VideoComplete();

            videoComplete.id = this.nextId.toString();
            videoComplete.videoId = this.nextId.toString();
            videoComplete.videoDetailId = this.nextId.toString();

            this.dispatch(DomainActions.storeVideoComplete(videoComplete));
        }
    }
}