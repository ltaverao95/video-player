import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
    store
} from './store';

import {
    VideoHome
} from './modules/video-home/components/VideoHome';

const rootApp = document.getElementById("root-app");

ReactDOM.render(
    <Provider store={store}>
        <VideoHome />
    </Provider>,
    rootApp
);