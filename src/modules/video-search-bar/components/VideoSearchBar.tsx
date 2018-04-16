import * as React from 'react';
import axios, { AxiosPromise, AxiosResponse } from 'axios';

import {
    Glyphicon
} from 'react-bootstrap';

import {

    AppState,
    VideoSearchBar as VideoSearchBarModule,
    Common

} from '../../domain';

export interface OwnProps {

}

export interface VideoSearchBarProps {
    videoSearchViewModel: VideoSearchBarModule.VideoSearchViewModel;
}

export interface VideoSearchBarDispatch {
    storeVideosResult: (videoSearchViewModel: VideoSearchBarModule.VideoSearchViewModel) => void;
}

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
                <table style={{width: "100%"}}>
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

        let videoSearchServices = new Common.Services.VideoSearchServices();

        const request = videoSearchServices.searchVideos(this.videoSearchViewModel.videoSearchName);
        
        request.then((response: AxiosResponse) => {

            this.videoSearchViewModel = videoSearchServices.mapVideosList(response);

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