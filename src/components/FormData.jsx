import React from 'react'
import { useState } from 'react';
import "./FormData.css"

const FormData = ({ updateValue }) => {

    const [word, setWord] = useState('');

    // changlehandlers for input
    let changeHandler = (event) => {
        console.log(event.target.value)
        setWord(event.target.value);
    }


    // btn for input 
    let addHandler = async (e) => {
        e.preventDefault();
        console.log(word);
        const info = await fetchApi();

        console.log(info);
        if (info) {
            updateValue(info);
        }
        setWord('');
    }


    // fetch the api 
    let fetchApi = async () => {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        try {
            const apiData = await fetch(apiUrl);

            if (!apiData.ok) {
                if (apiData.status === 404) {
                    alert("This word not found !");

                } else {
                    throw new Error(`HTTP error! Status: ${apiData.status}`);
                }
            }

            const jsonData = await apiData.json();
            
            console.log(jsonData);


            let wordData = {
                name: jsonData[0].word,
                phonetic: jsonData[0].phonetic,
                audio: jsonData[0].phonetics[0].audio,
                partOfSpeach: jsonData[0].meanings[0].partOfSpeech,
                definitions: [],
                sourceUrls: jsonData[0].sourceUrls[0]
            }


            jsonData[0].meanings[0].definitions.forEach(definition => {
                wordData.definitions.push({
                    definition: definition.definition,
                })
            });


            console.log(wordData);

            return wordData;
        }

        catch (err) {
            console.log("kuch Hai")
            console.log(err.message);
        }

    }



    return (
        <div className='form_container'>
            <form onSubmit={addHandler} className='form_data'>
                <label htmlFor='searchWord'>Pease Enter Word : </label>


                <input
                    type='text'
                    placeholder='Please Enter a word'
                    name='word'
                    value={word}
                    onChange={changeHandler}
                    id='searchWord'
                />
                <button className='btn' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default FormData
