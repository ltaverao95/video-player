import { Reducer, combineReducers } from 'redux';

import {

    EntityMap,
    EntityNormalizedObj
    
} from '../utils';

import {

    ActionTypes

} from './actionTypes';

import {

    Video,
    VideoDetail,
    VideoComplete,
    CommonConfiguration,
    InterfaceConfiguration,
    Services

} from './';

export namespace Reducers {

    namespace VideosMap{

        const byId = (state: EntityMap<Video> = new EntityMap<Video>(), action: ActionTypes.Action): EntityMap<Video> => {

            switch(action.type)
            {
                case ActionTypes.ADD_VIDEO:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeById<Video>(state, action.video);
            }

            return state;
        }

        const allIds = (state: Array<string> = new Array<string>(), action: ActionTypes.Action): Array<string> => {

            switch(action.type)
            {
                case ActionTypes.ADD_VIDEO:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeByAllIds(state, action.video);
            }

            return state;
        }

        export const videosMapReducer: Reducer<EntityNormalizedObj<Video>> = combineReducers<EntityNormalizedObj<Video>>({
            byId,
            allIds
        });
    }

    namespace VideoDetailMap{

        const byId = (state: EntityMap<VideoDetail> = new EntityMap<VideoDetail>(), action: ActionTypes.Action): EntityMap<VideoDetail> => {

            switch(action.type)
            {
                case ActionTypes.ADD_VIDEO_DETAIL:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeById<VideoDetail>(state, action.videoDetail);
            }

            return state;
        }

        const allIds = (state: Array<string> = new Array<string>(), action: ActionTypes.Action): Array<string> => {

            switch(action.type)
            {
                case ActionTypes.ADD_VIDEO_DETAIL:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeByAllIds(state, action.videoDetail);
            }

            return state;
        }

        export const videoDetailMapReducer: Reducer<EntityNormalizedObj<Video>> = combineReducers<EntityNormalizedObj<Video>>({
            byId,
            allIds
        });
    }

    namespace VideoCompeteMap{

        const byId = (state: EntityMap<VideoComplete> = new EntityMap<VideoComplete>(), action: ActionTypes.Action): EntityMap<VideoComplete> => {

            switch(action.type)
            {
                case ActionTypes.ADD_VIDEO_COMPLETED:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeById<VideoComplete>(state, action.videoComplete);
            }

            return state;
        }

        const allIds = (state: Array<string> = new Array<string>(), action: ActionTypes.Action): Array<string> => {

            switch(action.type)
            {
                case ActionTypes.ADD_VIDEO_COMPLETED:
                    let entityStorageService = new Services.EntityMapStorageService();
                    return entityStorageService.storeByAllIds(state, action.videoComplete);
            }

            return state;
        }

        export const videoCompleteReducer: Reducer<EntityNormalizedObj<Video>> = combineReducers<EntityNormalizedObj<Video>>({
            byId,
            allIds
        });
    }

    const commonConfiguration: Reducer<CommonConfiguration> = combineReducers<CommonConfiguration>({
        videosMap: VideosMap.videosMapReducer,
        videoDetailMap: VideoDetailMap.videoDetailMapReducer,
        videoComplete: VideoCompeteMap.videoCompleteReducer
    });

    export const interfaceConfiguration: Reducer<InterfaceConfiguration> = combineReducers<InterfaceConfiguration>({
        commonConfiguration
    });
}