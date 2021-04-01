import {CardInterface} from '../models/cards';

export const getCards = (store: any): CardInterface[] => store.cards.cards;
export const getDetail = (store: any): CardInterface => store.cards.cardLoaded;