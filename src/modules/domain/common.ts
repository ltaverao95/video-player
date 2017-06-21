import axios, { AxiosPromise, AxiosResponse } from 'axios';
import YTSearch from 'youtube-api-search';

import {

    VideoSearchBar

} from './';

import {

    ActionResultDTO

} from '../utils';

export namespace Common {

    export const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
    export const API_KEY = 'AIzaSyAvucYb8pcxTx20CHE6StwLF8iGT76K1RA';

    export namespace Services {

        export class VideoSearchServices {


            public searchVideos(videoSearchName: string): AxiosPromise {

                const params = {
                    part: 'snippet',
                    key: API_KEY,
                    q: videoSearchName,
                    type: 'video'
                };

                const request = axios.get(YOUTUBE_URL, { params: params });

                return request;
            }

            public mapVideosList(response: AxiosResponse): VideoSearchBar.VideoSearchViewModel {

                let videoSearchViewModel = new VideoSearchBar.VideoSearchViewModel();

                response.data.items.map((item) => {

                    let videoDTO = new VideoSearchBar.VideoDTO();

                    videoDTO.id = item.id.videoId;
                    videoDTO.title = item.snippet.title;
                    videoDTO.imageUrl = item.snippet.thumbnails.medium.url;
                    videoDTO.detail = item.snippet.description;
                    videoDTO.url = item.id.videoId;

                    videoSearchViewModel.videoSearchDTO.searchResult.push(videoDTO);
                });

                return videoSearchViewModel;
            }
        }
    }
}