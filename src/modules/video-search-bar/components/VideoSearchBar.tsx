import * as React from 'react';
import axios from 'axios';
import YTSearch from 'youtube-api-search';

import {
    Glyphicon
} from 'react-bootstrap';

import {

    AppState,
    VideoSearchBar as VideoSearchBarModule

} from '../../domain';

export interface OwnProps {

}

export interface VideoSearchBarProps {
    videoSearchViewModel: VideoSearchBarModule.VideoSearchViewModel;
}

export interface VideoSearchBarDispatch {
    storeVideosResult: (videoSearchViewModel: VideoSearchBarModule.VideoSearchViewModel) => void;
}

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyAvucYb8pcxTx20CHE6StwLF8iGT76K1RA';

export class VideoSearchBar extends React.Component<VideoSearchBarProps & VideoSearchBarDispatch & OwnProps, undefined>{

    private videoSearchViewModel: VideoSearchBarModule.VideoSearchViewModel;

    constructor(props: VideoSearchBarProps & VideoSearchBarDispatch & OwnProps) {
        super(props);

        this.onSearchBarTitleClicked = this.onSearchBarTitleClicked.bind(this);
        this.onSearchBarTitleChanged = this.onSearchBarTitleChanged.bind(this);
    }

    render() {

        this.initialize();

        return (
            <form>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <button type="button"
                                    style={{ marginLeft: '-40px' }}
                                    className="btn btn-default"
                                    onClick={this.onSearchBarTitleClicked}>
                                    <Glyphicon glyph="search" />
                                </button>
                            </td>
                            <td>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    onChange={this.onSearchBarTitleChanged} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }

    private initialize() {
        this.videoSearchViewModel = JSON.parse(JSON.stringify(this.props.videoSearchViewModel));
    }

    private onSearchBarTitleClicked() {

        if (!this.videoSearchViewModel.videoSearchName ||
            this.videoSearchViewModel.videoSearchName.length == 0) {
            return;
        }

        const params = {
            part: 'snippet',
            key: API_KEY,
            q: this.videoSearchViewModel.videoSearchName,
            type: 'video'
        };

        const request = axios.get(YOUTUBE_URL, { params: params });

        request.then((response: any) => {
            console.log(response.data);

            let videoDTO = new VideoSearchBarModule.VideoDTO();

            this.videoSearchViewModel.videoSearchDTO.searchResult = [];

            response.data.items.map((item) => {

                videoDTO.id = item.id.videoId;
                videoDTO.title = item.snippet.title;
                videoDTO.imageUrl = item.snippet.thumbnails.medium.url;
                videoDTO.detail = item.snippet.description;

                this.videoSearchViewModel.videoSearchDTO.searchResult.push(videoDTO);
            });

            if (!this.videoSearchViewModel.videoSearchDTO.searchResult ||
                this.videoSearchViewModel.videoSearchDTO.searchResult.length == 0) {
                return;
            }

            this.props.storeVideosResult(this.videoSearchViewModel);
        });
    }

    private onSearchBarTitleChanged(evt: any) {
        this.videoSearchViewModel.videoSearchName = evt.target.value;
    }
}