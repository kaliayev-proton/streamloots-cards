import { CardInterface } from '../../models/cards';
import * as actionTypes from '../actions/actionTypes';
import * as actionCreators from './cards';

describe('Cards action creators', () => {
    const card: CardInterface = {
        _id: '23e23e',
        name: 'nameUpdated',
        imageUrl: 'string',
        count: {
            total: 0,
        }
    }
    test('return an action with type FETCH_CARDS', () => {
        const actionCreator = actionCreators.fetchCards();
        expect(actionCreator).toStrictEqual({type: actionTypes.FETCH_CARDS});
    });
    test('return an action with type FETCH_CARDS_SUCCESS', () => {
        const actionCreator = actionCreators.fetchCardsSuccess(card);
        expect(actionCreator).toStrictEqual({type: actionTypes.FETCH_CARDS_SUCCESS, payload: card});
    });
    test('return an action with type FETCH_CARDS_FAILED', () => {
        const actionCreator = actionCreators.fetchCardsFailed();
        expect(actionCreator).toStrictEqual({type: actionTypes.FETCH_CARDS_FAILED});
    });
    test('return an action with type LOAD_CARD', () => {
        const actionCreator = actionCreators.loadCard(card);
        expect(actionCreator).toStrictEqual({type: actionTypes.LOAD_CARD, payload: card});
    });
    test('return an action with type UPLOAD_CARD', () => {
        const actionCreator = actionCreators.updateCard(card);
        expect(actionCreator).toStrictEqual({type: actionTypes.UPLOAD_CARD, payload: card});
    });
    test('return an action with type DELETE_CARD', () => {
        const cardId: string = 'ed32';
        const actionCreator = actionCreators.deleteCard(cardId);
        expect(actionCreator).toStrictEqual({type: actionTypes.DELETE_CARD, payload: cardId});
    });
    test('return an action with type FILTER_CARDS', () => {
        const filter: string = 'e';
        const actionCreator = actionCreators.filterCards(filter);
        expect(actionCreator).toStrictEqual({type: actionTypes.FILTER_CARDS, payload: filter});
    });
});