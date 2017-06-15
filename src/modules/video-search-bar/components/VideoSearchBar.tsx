import * as React from 'react';
import {
    Glyphicon
} from 'react-bootstrap';

export interface OwnProps {
    onVideoSearchBarTitleChanged: (value: string) => void;
}

export interface VideoSearchBarProps {

}

export interface VideoSearchBarDispatch {

}

export class VideoSearchBar extends React.Component<VideoSearchBarProps & VideoSearchBarDispatch & OwnProps, undefined>{

    private currentVideoTitle: string;

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
        this.currentVideoTitle = null;
    }

    private onSearchBarTitleClicked() {
        this.props.onVideoSearchBarTitleChanged(this.currentVideoTitle);
    }

    private onSearchBarTitleChanged(evt: any) {
        this.currentVideoTitle = evt.target.value;
    }
}