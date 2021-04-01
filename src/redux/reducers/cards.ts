import * as actionTypes from '../actions/actionTypes';

import {CardInterface} from '../../models/cards';

interface CardsInitStateInterface {
  cards: CardInterface[],
  cardLoaded: CardInterface | null,
}

const initialState: CardsInitStateInterface = {
  cards: [],
  cardLoaded: null,
};

const cards = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case actionTypes.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: payload
      };
    case actionTypes.LOAD_CARD:
      return {
        ...state,
        cardLoaded: payload,
      }
    case actionTypes.UPLOAD_CARD:
      const newList: CardInterface[] = state.cards.map((card: CardInterface) => {
        if (card._id === payload._id) {
          card.imageUrl = payload.imageUrl;
          card.name = payload.name;
        }
        return card;
      });
      console.log(state.cards);
      return {
        ...state,
        cards: newList,
      }
    default:
      return state;
  }
}

export default cards;