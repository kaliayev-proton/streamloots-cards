import * as selector from './selectors';
import { StoreInterface } from '../models/store';

describe('Redux selectors', () => {
    const store: StoreInterface = {
        cards: {
            cards: [],
            cardLoaded: null,
            cardsFiltered: [],
            filterByName: '',
        }
    };
    test('return cards array', () => {
        expect(selector.getCards(store)).toEqual(store.cards.cards);
    });
    test('return filtered cards', () => {
        expect(selector.getCardsFiltered(store)).toEqual(store.cards.cardsFiltered);
    });
    test('return card detail', () => {
        expect(selector.getDetail(store)).toEqual(store.cards.cardLoaded);
    });
    test('return filter', () => {
        expect(selector.getFilter(store)).toEqual(store.cards.filterByName);
    });
});