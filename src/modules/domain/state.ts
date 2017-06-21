import {
    InterfaceConfiguration,
    VideoSearchBar,
    VideoDetailModel,
    VideoPlayerModel
} from './';

class VideoSearchBarModule{
    videoSearchViewModel: VideoSearchBar.VideoSearchViewModel;
}

class VideoDetailModule{
    videoDetailViewModel: VideoDetailModel.VideoDetailViewModel;
}

class VideoPlayerModule{
    videoPlayerViewModel: VideoPlayerModel.VideoPlayerViewModel
}

class UI{
    videoSearchBarModule: VideoSearchBarModule;
    videoDetailModule: VideoDetailModule;
    videoPlayerModule: VideoPlayerModule;
}

class AppState{
    interfaceConfiguration: InterfaceConfiguration;
    ui: UI;
}

export 
{
    AppState,
    UI,
    VideoSearchBarModule,
    VideoDetailModule,
    VideoPlayerModule
}