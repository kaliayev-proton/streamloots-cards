import { CardInterface } from '../../models/cards';
import * as actionTypes from '../actions/actionTypes';
import cards, {CardsStateInterface} from './cards';

describe('Cards reducer', () => {
    let initState: CardsStateInterface = {
        cards: [],
        cardLoaded: null,
        cardsFiltered: [],
        filterByName: '',
    }

    test('when action type does not exist, return state', () => {
        const newState = {
            cards: [],
            cardLoaded: 'wd23e',
            cardsFiltered: [],
            filterByName: 'filtro',
        }
        const action = { type: 'ANY', payload: newState }
        const defautlState: CardsStateInterface = cards(initState, action);
        expect(defautlState).toEqual(initState);
    });

    test('update cards and cardsFiltered when type is FETCH_CARDS_SUCCESS', () => {
        const payload = [{}, {}, {}];
        const action = { type: actionTypes.FETCH_CARDS_SUCCESS, payload }

        const newState: CardsStateInterface = cards(initState, action);
        expect(newState.cards).toEqual(payload);
        expect(newState.cardsFiltered).toEqual(payload);
    });

    test('updates cardLoaded field when type is LOAD_CARD', () => {
        const payload = {};
        const action = { type: actionTypes.LOAD_CARD, payload };

        const newState: CardsStateInterface = cards(initState, action);
        expect(newState.cardLoaded).toEqual(payload);
    });

    test('updates one card from cards arr field when type is UPLOAD_CARD', () => {
        const payload = {
            _id: '23e23e',
            name: 'nameUpdated',
            imageUrl: 'string',
            count: {
                total: 0,
            }
        };
        const action = { type: actionTypes.UPLOAD_CARD, payload };
        const state = {
            cards: [{
                _id: '23e23e',
                name: 'name',
                imageUrl: 'string',
                count: {
                    total: 0,
                }
            }],
            cardLoaded: null,
            cardsFiltered: [],
            filterByName: '',
        }

        const newState: CardsStateInterface = cards(state, action);
        expect(newState.cards.length).toBe(state.cards.length);
        expect(newState.cards[0].name).toBe('nameUpdated');
    });

    describe('delete one card', () => {
        const cardsArr = [
            {
                _id: '23e23e',
                name: 'little pet',
                imageUrl: 'string',
                count: {
                    total: 0,
                }
            },{
                _id: 'tyh56y45',
                name: 'zing',
                imageUrl: 'string',
                count: {
                    total: 0,
                }
            }
        ];
        const state = {
            cards: cardsArr,
            cardLoaded: null,
            cardsFiltered: cardsArr,
            filterByName: '',
        };
        test('delete one card from cards and cardsFiltered fields WITHOUT filter when type is DELETE_CARD', () => {
            const payload: string = '23e23e';
            const action = { type: actionTypes.DELETE_CARD, payload };
            const newState: CardsStateInterface = cards(state, action);
    
            expect(newState.cards.length).toBe(1);
            expect(newState.cards.length).toBe(newState.cardsFiltered.length);
        });

        test('delete one card from cards and cardsFiltered fields WITH filter when type is DELETE_CARD', () => {
            const payload: string = '23e23e';
            const action = { type: actionTypes.DELETE_CARD, payload };
            state.filterByName = 'l'
            const newState: CardsStateInterface = cards(state, action);
    
            expect(newState.cards.length).toBe(1);
            expect(newState.cardsFiltered.length).toBe(0);
        });
    });

    test('filter cards field and assign cardsFiltered field when type is FILTER_CARDS', () => {
        const cardsArr: CardInterface[] = [
            {
                _id: '23e23e',
                name: 'little pet',
                imageUrl: 'string',
                count: {
                    total: 0,
                }
            },{
                _id: 'tyh56y45',
                name: 'zing',
                imageUrl: 'string',
                count: {
                    total: 0,
                }
            }
        ];
        initState.cards = cardsArr;
        const payload: string = 'z';
        const action = { type: actionTypes.FILTER_CARDS, payload };

        const newState: CardsStateInterface = cards(initState, action);
        expect(newState.filterByName).toBe(payload);
        expect(newState.cardsFiltered.length).toBe(1);
    });

});

