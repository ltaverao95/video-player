import {

    AppState,

    VideoSearchBar

} from './modules/domain';

export const appState: AppState = {
    interfaceConfiguration: {
        commonConfiguration: {
            videoComplete: {
                byId: {
                    "1": {
                        id: "1",
                        videoDetailId: "1",
                        videoId: "1"
                    }
                },
                allIds: ["1"]
            },
            videoDetailMap: {
                byId: {
                    "1": {
                        id: "1",
                        detail: "",
                        url: ""
                    }
                },
                allIds: ["1"]
            },
            videosMap: {
                byId: {
                    "1": {
                        id: "1",
                        title: "",
                        videoDetailId: ""
                    }
                },
                allIds: ["1"]
            }
        }
    },
    ui: {
        videoSearchBarModule: {
            videoSearchViewModel: new VideoSearchBar.VideoSearchViewModel()
        }
    }
};