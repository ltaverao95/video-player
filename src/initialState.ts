import {

    AppState,

    VideoSearchBar

} from './modules/domain';

export const appState: AppState = {
    interfaceConfiguration: {
        commonConfiguration: {
            videoComplete: {
                byId: {},
                allIds: []
            },
            videoDetailMap: {
                byId: {},
                allIds: []
            },
            videosMap: {
                byId: {},
                allIds: []
            }
        }
    },
    ui: {
        videoSearchBarModule: {
            videoSearchViewModel: new VideoSearchBar.VideoSearchViewModel()
        }
    }
};