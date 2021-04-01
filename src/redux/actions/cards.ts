import * as actionTypes from './actionTypes';

import {CardInterface} from '../../models/cards';

export const fetchCards = () => ({
    type: actionTypes.FETCH_CARDS
});

export const fetchCardsSuccess = (payload: CardInterface) => ({
    type: actionTypes.FETCH_CARDS_SUCCESS,
    payload,
});

export const fetchCardsFailed = () => ({
    type: actionTypes.FETCH_CARDS_FAILED
});

export const loadCard = (payload: CardInterface) => ({
    type: actionTypes.LOAD_CARD,
    payload,
});

export const updateCard = (payload: CardInterface) => ({
    type: actionTypes.UPLOAD_CARD,
    payload,
});