import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import './searchForm.scss';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

const SearchForm = () => {

    const [character, setCharacter] = useState(null);
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    const onCharLoaded = (character) => {
        setCharacter(character);
    }

    const updateCharacter = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const results = !character ? null : character.length > 0 ?
                    <div className='searchform__succes'>
                        {`There is! Visit ${character[0].name} page?`}
                        <Link to={`/character/${character[0].name}`}>
                            <button className='button button__secondary'>
                                <div className="inner">TO PAGE</div>
                            </button>
                        </Link>
                    </div> :
                    <div className='searchform__fail'>
                        The character was not found. Check the name and try again
                    </div>;


    

    return (
        <div className="searchform">
            <Formik
                initialValues={{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit = { ({charName}) => {
                    updateCharacter(charName);
                }}
            >
                <Form>
                    <label className='searchform__header' htmlFor='charName'>Or find a character by name:</label>
                    <div>
                        <Field
                            className='searchform__input'
                            id='charName'
                            name='charName'
                            type='text'
                            placeholder='Enter name'/>
                        <button
                            type='submit'
                            className='button button__main'
                            disabled={loading}>
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <FormikErrorMessage component='div' name='charName'/>
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}

export default SearchForm;