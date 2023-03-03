import { useParams, Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';

import './singleComicPage.scss';

const SingleCharPage = () => {
    const {charName} = useParams();
    const [char, setChar] = useState(null);
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [charName])

    const updateChar = () => {
        clearError();
        getCharacterByName(charName).then(onCharLoaded);
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail} = char[0];
    const finalDescription = description ? description : 'There is no any description for this character';

    return (
        <>
            <AppBanner />
            <div className="single-comic">
                <img src={thumbnail.path + '.' + thumbnail.extension} alt={name} className="single-comic__img" style={{height: '293px'}}/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{name}</h2>
                    <p className="single-comic__descr">{finalDescription}</p>
                </div>
                <Link to='/' className="single-comic__back">Back</Link>
            </div>
        </>
    )
}

export default SingleCharPage;