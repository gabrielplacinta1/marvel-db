import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useState, useEffect } from 'react';
import setContent from '../../utils/setContent';

import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';

import './singleComicPage.scss';

const SingleCharPage = () => {
    const {charName} = useParams();
    const [char, setChar] = useState(null);
    const {getCharacterByName, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [charName])

    const updateChar = () => {
        clearError();
        getCharacterByName(charName)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    return (
        <>
            {setContent(process, View, char)}
        </>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail} = data[0];
    const finalDescription = description ? description : 'There is no any description for this character';

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                    />
                <title>{`${name} page`}</title>
            </Helmet>
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