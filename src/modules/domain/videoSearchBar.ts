export namespace VideoSearchBar {

    export class VideoDTO{
        id: string;
        title: string;
        detail: string;
        url: string;
        imageUrl: string;
    }

    export class VideoSearchDTO{

        constructor(){
            this.searchResult = new Array<VideoDTO>();
        }

        searchResult: Array<VideoDTO>;
    }
    
    export class VideoSearchViewModel {

        constructor(){
            this.videoSearchDTO = new VideoSearchDTO();
        }

        videoSearchName: string;
        videoSearchDTO: VideoSearchDTO
    }
}