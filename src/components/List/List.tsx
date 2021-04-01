import React from 'react';
import Card from '../Card/Card';
import {CardInterface} from '../../models/cards';

import './List.scss';

interface ListProps {
    items: CardInterface[],
}
const List: React.FC<ListProps> = ({items}: ListProps) => {
    return (
        <ul className="sl-list">
            {items.map((card, i: number) => <Card {...card} key={card._id + i} />)}
        </ul>
    );
};

export default List;