import React from 'react'
import { AiOutlineSound } from "react-icons/ai";
import { useState } from 'react';
import "./Card.css"


const Card = ({ wordInfo }) => {

    const [audioAvailable, setAudioAvailable] = useState(true);

    console.log(wordInfo.partOfSpeech);

    let definitions = wordInfo.definitions;
    console.log(definitions);

    function playSound() {
        if (wordInfo.audio) {
            const audio = new Audio(wordInfo.audio);
            audio.play();
            setAudioAvailable(true);
        } else {
            setAudioAvailable(false);
        }
    }

    return (
        <div className='word_container'>        
            <div className='word_sub_container'>
                <h1>Word : {wordInfo.name}</h1>
                <p>Phonetic: <i>{wordInfo.phonetic}</i></p>
                <button onClick={playSound}>
                    <AiOutlineSound />
                </button>

                {/* Conditionally render audio message */}
                {!audioAvailable && <p>Audio not available</p>}

                <p>Part of Speech: {wordInfo.partOfSpeech}</p>
                <h1>Definitions:</h1>
                {
                    wordInfo.definitions.map((definition, key) => (
                        <li className='def_text' key={key}>{definition.definition}</li>
                    ))
                }


                <button className='btn-card'>
                    <a href={wordInfo.sourceUrls} target="_blank" rel="noopener noreferrer">
                        Click for reference
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Card;



