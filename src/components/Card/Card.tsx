import React from 'react';
import { useDispatch } from 'react-redux';
import {CardInterface} from '../../models/cards';
import {loadCard} from '../../redux/actions'

import './Card.scss';

const Card: React.FC<CardInterface> = ({name, imageUrl, count, _id}: CardInterface) => {
    const dispatch = useDispatch();
    const toSelect = () => dispatch(loadCard({name, imageUrl, count, _id} as CardInterface));
    console.log('Card rendering');
    return (
        <li className="sl-card" onClick={toSelect}>
            Name: {name} ({count.total})
            <img src={imageUrl} alt={name} />
        </li>
    );
};

export default React.memo(Card);