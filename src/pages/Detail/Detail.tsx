import React, {FormEvent, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';

import { CardInterface } from '../../models/cards';
import {getDetail} from '../../redux/selectors';

import {updateCard} from '../../redux/actions';

import './Detail.scss';

const Detail: React.FC = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const detail: CardInterface = useSelector(getDetail);

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

    const updateForm = (values: any) => {
        setDetailFields((prevValues: CardInterface) => ({...prevValues, [values.target.name]: values.target.value}));
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(updateCard(detailFields));
        history.push('/');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                <input type="text" name="name" value={detailFields?.name} required onChange={updateForm} />
            </label>
            <label>
                <input type="text" name="imageUrl" value={detailFields?.imageUrl} required onChange={updateForm} />
            </label>
            <button type="submit" >Edit</button>
        </form>
    );
};

export default Detail;