import {

    VideoDetail

} from './';

export namespace VideoPlayerModel {

    export class VideoPlayerViewModel {

        constructor(){
            this.videoSelected = new VideoDetail();    
        }

        videoSelected: VideoDetail;
    }
}