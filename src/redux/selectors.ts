import {CardInterface} from '../models/cards';
import { StoreInterface } from '../models/store';

export const getCards = (store: StoreInterface): CardInterface[] => store.cards.cards;
export const getCardsFiltered = (store: StoreInterface): CardInterface[] => store.cards.cardsFiltered;
export const getDetail = (store: StoreInterface): CardInterface | null => store.cards.cardLoaded;
export const getFilter = (store: StoreInterface): string => store.cards.filterByName;