import React from 'react'
import { AiOutlineSound } from "react-icons/ai";
import { useState } from 'react';


const Card = ({ wordInfo }) => {

    const [audioAvailable, setAudioAvailable] = useState(true);


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
        <div>
            <div>
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
                        <p key={key}>{definition.definition}</p>
                    ))
                }


                <button>
                    <a href={wordInfo.sourceUrls} target="_blank" rel="noopener noreferrer">
                        Click me for reference
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Card;



