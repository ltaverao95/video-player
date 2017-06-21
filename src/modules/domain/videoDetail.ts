import {

    VideoDetail

} from './';

export namespace VideoDetailModel {

    export class VideoDetailViewModel {

        constructor(){
            this.videoSelected = new VideoDetail();    
        }

        videoSelected: VideoDetail;
    }
}