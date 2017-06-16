import { createSelector } from 'reselect';

import {

    EntityNormalizedObj

} from '../utils';

import {

    AppState,
    Video,
    VideoDetail,
    VideoComplete,
    VideoSearchBar as VideoSearchBarModule

} from '../domain';

export namespace Selectors{

    export namespace Videos{

        export const getVideosMap = (appState: AppState): EntityNormalizedObj<Video> => appState.interfaceConfiguration.commonConfiguration.videosMap;

        export const getVideosList = createSelector(
            [getVideosMap],
            (getVideosMap: EntityNormalizedObj<Video>): Array<Video> => {

                let videosList = new Array<Video>();

                if (!getVideosMap) {
                    return videosList;
                }

                if (!getVideosMap.allIds) {
                    videosList;
                }

                for (let i = 0; i < getVideosMap.allIds.length; i++) {
                    videosList.push(getVideosMap.byId[getVideosMap.allIds[i]]);
                }

                return videosList;
            }
        );

        export const getVideosCount = createSelector(
            [getVideosList],
            (getVideosList: Array<Video>): number => {
                return getVideosList.length;
            }
        );

        export const getNextVideoId = createSelector(
            [getVideosCount],
            (getVideosCount: number): string => {
                return (getVideosCount + 1).toString();
            }
        );

        export const getVideoById = (videoId:string) => {
            return createSelector(
                getVideosList,
                (videosList:Array<Video>): Video => {
                    return videosList.find((video:Video)=> video.id == videoId);
                }
            );
        };
    }

    export namespace VideosDetail{

        export const getVideosDetailMap = (appState: AppState): EntityNormalizedObj<VideoDetail> => appState.interfaceConfiguration.commonConfiguration.videoDetailMap;

        export const getVideosDetailList = createSelector(
            [getVideosDetailMap],
            (getVideosDetailMap: EntityNormalizedObj<VideoDetail>): Array<VideoDetail> => {

                let videosDetailList = new Array<VideoDetail>();

                if (!getVideosDetailMap) {
                    return videosDetailList;
                }

                if (!getVideosDetailMap.allIds) {
                    videosDetailList;
                }

                for (let i = 0; i < getVideosDetailMap.allIds.length; i++) {
                    videosDetailList.push(getVideosDetailMap.byId[getVideosDetailMap.allIds[i]]);
                }

                return videosDetailList;
            }
        );

        export const getVideosDetailCount = createSelector(
            [getVideosDetailList],
            (getVideosDetailList: Array<VideoDetail>): number => {
                return getVideosDetailList.length;
            }
        );

        export const getNextVideoDetailId = createSelector(
            [getVideosDetailCount],
            (getVideosDetailCount: number): string => {
                return (getVideosDetailCount + 1).toString();
            }
        );

        export const getVideoDetailById = (videoDetailId:string) => {
            return createSelector(
                getVideosDetailList,
                (videosList:Array<VideoDetail>): VideoDetail => {
                    return videosList.find((videoDetail:VideoDetail)=> videoDetail.id == videoDetailId);
                }
            );
        };
    }

    export namespace VideosComplete{

        export const getVideosCompleteMap = (appState: AppState): EntityNormalizedObj<VideoComplete> => appState.interfaceConfiguration.commonConfiguration.videoComplete;

        export const getVideosCompleteList = createSelector(
            [getVideosCompleteMap],
            (getVideosCompleteMap: EntityNormalizedObj<VideoComplete>): Array<VideoComplete> => {

                let videosCompleteList = new Array<VideoComplete>();

                if (!getVideosCompleteMap) {
                    return videosCompleteList;
                }

                if (!getVideosCompleteMap.allIds) {
                    videosCompleteList;
                }

                for (let i = 0; i < getVideosCompleteMap.allIds.length; i++) {
                    videosCompleteList.push(getVideosCompleteMap.byId[getVideosCompleteMap.allIds[i]]);
                }

                return videosCompleteList;
            }
        );

        export const getVideosCompleteCount = createSelector(
            [getVideosCompleteList],
            (getVideosCompleteList: Array<VideoComplete>): number => {
                return getVideosCompleteList.length;
            }
        );

        export const getNextVideoCompleteId = createSelector(
            [getVideosCompleteCount],
            (getVideosCompleteCount: number): string => {
                return (getVideosCompleteCount + 1).toString();
            }
        );

        export const getVideoCompleteById = (videoCompleteId:string) => {
            return createSelector(
                getVideosCompleteList,
                (videosCompleteList:Array<VideoComplete>): VideoComplete => {
                    return videosCompleteList.find((videoComplete:VideoComplete)=> videoComplete.id == videoCompleteId);
                }
            );
        };
    }
}