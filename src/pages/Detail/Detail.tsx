import React, {FormEvent, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';

import { CardInterface } from '../../models/cards';
import {getDetail} from '../../redux/selectors';

import {updateCard} from '../../redux/actions';

import useAnalytics, { AnalitycsInterface } from '../../hooks/analytics';

import './Detail.scss';

const Detail: React.FC = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const detail: CardInterface | null = useSelector(getDetail);

    const {event}: AnalitycsInterface = useAnalytics();

    // State
    const [detailFields, setDetailFields] = useState<CardInterface>({
        name: '',
        imageUrl: '',
        _id: '',
        count: {total: 0},
    })

    useEffect(() => {
        if (!!detail) {
            setDetailFields({...detail});
        }
    }, [detail]);

    const updateForm = (values: any): void => {
        setDetailFields((prevValues: CardInterface) => ({...prevValues, [values.target.name]: values.target.value}));
    }

    const onSubmit = (ev: FormEvent<HTMLFormElement>): void => {
        ev.preventDefault();
        dispatch(updateCard(detailFields));
        const target = ev.target as HTMLElement;
        event('click', {text: target.innerText, action: 'Submit new values', cardId: detail?._id });
        history.push('/');
    };

    const onReturn = (ev: any): void => {
        event('click', {text: ev.target.innerText, action: 'Redirect to /' });
        history.push('/');
    }

    return (
        <form onSubmit={onSubmit} className="sl-form">
            <button className="sl-form__btn sl-form__btn--return" onClick={onReturn}>Return</button>
            <label className="sl-form__label">
                <span>Name</span>
                <input data-test="detail-input-name" type="text" name="name" value={detailFields?.name} required onChange={updateForm} />
            </label>
            <label className="sl-form__label">
                <span>Image URL</span>
                <input data-test="detail-input-image" type="text" name="imageUrl" value={detailFields?.imageUrl} required onChange={updateForm} />
            </label>
            <img className="sl-form__img" src={detailFields?.imageUrl} alt={detailFields?.imageUrl}/>
            <button type="submit" data-test="detail-submit-button" className="sl-form__btn sl-form__btn--edit" >Edit</button>
        </form>
    );
};

export default Detail;