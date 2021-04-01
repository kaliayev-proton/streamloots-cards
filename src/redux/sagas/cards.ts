import * as CardsAPI from '../../api/cards';
import { put, call,CallEffect, PutEffect } from 'redux-saga/effects';
import * as actions from '../actions';

export function* fetchCardsSaga(): Generator<PutEffect<any> | CallEffect<any>, any, any> {
    try {
        const response: any = yield call<any>(CardsAPI.fetchCards);
        yield put(actions.fetchCardsSuccess(response.data));
    } catch {
        yield put(actions.fetchCardsFailed())
    }
}