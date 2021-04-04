import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useAnalytics, {AnalitycsInterface} from '../../hooks/analytics';

import {CardInterface} from '../../models/cards';
import {loadCard, deleteCard} from '../../redux/actions'

import './Card.scss';

const Card: React.FC<CardInterface> = ({name, imageUrl, count, _id}: CardInterface) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {event}: AnalitycsInterface = useAnalytics();

    const toSelect = (ev: any) => {
        dispatch(loadCard({name, imageUrl, count, _id} as CardInterface));
        event('click', {text: ev.target.innerText, action: 'Redirect to /edit', cardId: _id});
        history.push('/edit');
    };
    const toDelete = (ev: any) => {
        event('click', {text: ev.target.innerText, action: 'Delete card', cardId: _id});
        dispatch(deleteCard(_id));
    }

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