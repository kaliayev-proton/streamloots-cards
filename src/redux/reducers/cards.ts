import * as actionTypes from '../actions/actionTypes';

import {CardInterface} from '../../models/cards';

interface CardsInitStateInterface {
  cards: CardInterface[],
  cardsFiltered: CardInterface[],
  cardLoaded: CardInterface | null,
  filterByName: string,
}

const initialState: CardsInitStateInterface = {
  cards: [],
  cardLoaded: null,
  cardsFiltered: [],
  filterByName: '',
};

const cards = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case actionTypes.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: payload,
        cardsFiltered: payload
      };
    case actionTypes.LOAD_CARD:
      return {
        ...state,
        cardLoaded: payload,
      }
    case actionTypes.UPLOAD_CARD:
      const newListUpdated: CardInterface[] = state.cards.map((card: CardInterface) => {
        if (card._id === payload._id) {
          card.imageUrl = payload.imageUrl;
          card.name = payload.name;
        }
        return card;
      });
      return {
        ...state,
        cards: newListUpdated,
      };
    case actionTypes.DELETE_CARD:
      const newListWithDeletings: CardInterface[] = state.cards.filter((card: CardInterface) => {
        return card._id !== payload;
      });
      return {
        ...state,
        cards: newListWithDeletings,
        cardsFiltered: newListWithDeletings.filter((card: CardInterface) => {
          return card.name.toLowerCase().indexOf(state.filterByName.toLowerCase()) > -1;
        }),
      };
    case actionTypes.FILTER_CARDS:
      const cardsFiltered = state.cards.filter((card: CardInterface) => {
        return card.name.toLowerCase().indexOf(payload.toLowerCase()) > -1;
      })
      return {
        ...state,
        filterByName: payload,
        cardsFiltered
      }
    default:
      return state;
  }
}

export default cards;