import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as redux from 'redux';
import { Provider } from 'react-redux';

import {
    store
} from './store';

import {
    VideoHomeContainer
} from './modules/video-home/containers/VideoHomeContainer';

const rootApp = document.getElementById("root-app");

ReactDOM.render(
    <Provider store={store}>
        <VideoHomeContainer />
    </Provider>,
    rootApp
);