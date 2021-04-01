import {CardInterface} from '../models/cards';

export const getCards = (store: any): CardInterface[] => store.cards.cards;
export const getCardsFiltered = (store: any): CardInterface[] => store.cards.cardsFiltered;
export const getDetail = (store: any): CardInterface => store.cards.cardLoaded;
export const getFilter = (store: any): string => store.cards.filterByName;