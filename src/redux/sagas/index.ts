import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchCardsSaga} from './cards';

export function* watchCards() {
    yield takeEvery(actionTypes.FETCH_CARDS, fetchCardsSaga)
}