import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {CardInterface} from '../../models/cards';

// Redux
import { getCardsFiltered, getFilter } from '../../redux/selectors';
import { filterCards } from '../../redux/actions';

// Components
import Card from '../../components/Card/Card';

import useAnalytics from '../../hooks/analytics';

import './List.scss';

const List: React.FC = () => {
    const dispatch = useDispatch();
    const cards: CardInterface[] = useSelector(getCardsFiltered);
    const filter: string = useSelector(getFilter);
    console.log(cards);
    useAnalytics(cards.length);

    const filterByText = (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        dispatch(filterCards(value));
    }

    return (
        <div className="sl-list">
            <input type="text" placeholder="Filter by name..." onChange={filterByText} value={filter} className="sl-list__input" />
            <ul className="sl-list__ul">
                {cards.map((card, i: number) => <Card {...card} key={card._id + i} />)}
            </ul>
        </div>
    );
};

export default List;