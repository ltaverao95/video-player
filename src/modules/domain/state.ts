import {
    InterfaceConfiguration,
    VideoSearchBar
} from './';

class VideoSearchBarModule{
    videoSearchViewModel: VideoSearchBar.VideoSearchViewModel
}

class UI{
    videoSearchBarModule: VideoSearchBarModule;
}

class AppState{
    interfaceConfiguration: InterfaceConfiguration;
    ui: UI;
}

export 
{
    AppState,
    UI,
    VideoSearchBarModule
}