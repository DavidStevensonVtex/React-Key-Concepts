import { useState } from 'react' ;

const languages = {
    de: 'de-DE',
    us: 'en-US',
    uk: 'en-GB'
} ;

function LanguageSelector( { country } ) {
    return <p>Selected Language: { languages[country] }</p>
}