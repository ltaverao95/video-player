import { createStore, Action, Dispatch, Middleware, Store as ReduxStore } from 'redux';
import * as u from 'updeep';

import {

    AppState,
    Actions as DomainActions,
    VideoSearchBar,
    Video,
    VideoDetail,
    VideoComplete,
    Selectors as DomainSelectors

} from '../domain';

import {

    Actions,
    ActionTypes,
    Selectors

} from './';

export namespace Services {

}