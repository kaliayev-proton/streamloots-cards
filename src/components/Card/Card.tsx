import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {CardInterface} from '../../models/cards';
import {loadCard, deleteCard} from '../../redux/actions'

import './Card.scss';

const Card: React.FC<CardInterface> = ({name, imageUrl, count, _id}: CardInterface) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const toSelect = () => {
        dispatch(loadCard({name, imageUrl, count, _id} as CardInterface));
        history.push('/edit');
    };
    const toDelete = () => {
        dispatch(deleteCard(_id));
    }

    console.log('Card rendering');
    return (
        <li className="sl-card">
            <h2 className="sl-card__title">{name} ({count.total})</h2>
            <img src={imageUrl} alt={name} />
            <div className="sl-card__btns">
                <button className="sl-card__btns__btn sl-card__btns__btn--delete" type="button" onClick={toDelete} >Delete</button>
                <button className="sl-card__btns__btn sl-card__btns__btn--edit" type="button" onClick={toSelect} >Update</button>
            </div>
        </li>
    );
};

export default React.memo(Card, (prev: CardInterface, next: CardInterface) => prev._id === next._id);