import Card from "./Card"
import FormData from "./FormData"
import { useState } from "react";

const DicnaryApp = () => {


    const [wordInfo, setWordInfo] = useState(
        {
            "name": "book",
            "phonetic": "/bu:k/",
            "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/book-uk.mp3",
            "partOfSpeach": "noun",
            "definitions": [
                {
                    "definition": "A collection of sheets of paper bound together to hinge at one edge, containing printed or written material, pictures, etc."
                },
                {
                    "definition": "A long work fit for publication, typically prose, such as a novel or textbook, and typically published as such a bound collection of sheets, but now sometimes electronically as an e-book."
                },
                {
                    "definition": "A major division of a long work."
                },
                {
                    "definition": "A record of betting (from the use of a notebook to record what each person has bet)."
                },
                {
                    "definition": "A convenient collection, in a form resembling a book, of small paper items for individual use."
                },
                {
                    "definition": "The script of a musical or opera."
                },
                {
                    "definition": "(usually in the plural) Records of the accounts of a business."
                },
                {
                    "definition": "A book award, a recognition for receiving the highest grade in a class (traditionally an actual book, but recently more likely a letter or certificate acknowledging the achievement)."
                },
                {
                    "definition": "(whist) Six tricks taken by one side."
                },
                {
                    "definition": "Four of a kind"
                },
                {
                    "definition": "A document, held by the referee, of the incidents happened in the game."
                },
                {
                    "definition": "(by extension) A list of all players who have been booked (received a warning) in a game."
                },
                {
                    "definition": "The twenty-sixth Lenormand card."
                },
                {
                    "definition": "Any source of instruction."
                }
            ],
            "sourceUrls": "https://en.wiktionary.org/wiki/book"
        }
    );

    let updateValue = (resault) => {
        if (resault) {
            setWordInfo(resault);
        }
        else{
            setWordInfo(null);
        }

    }



    return (
        <div>


            <div>
                <h1>Dictionary App </h1>
            </div>
            <div>
                <FormData updateValue={updateValue} />
            </div>

            <div>
                {wordInfo ? (
                    <Card wordInfo={wordInfo} />
                ) : (
                    <p>Please enter a word to see its definition.</p>
                )}
            </div>

        </div>
    )
}

export default DicnaryApp