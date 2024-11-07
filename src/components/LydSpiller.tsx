import React from 'react';
//https://www.npmjs.com/package/react-speech-kit
//https://mikeyparton.github.io/react-speech-kit/
//https://github.com/MikeyParton/react-speech-kit/
import { useSpeechSynthesis } from "react-speech-kit";

interface LydSpillerProps {
    text: string;
    className: string;
}

export default function LydSpiller({ text, className }: LydSpillerProps) {
    const { speak } = useSpeechSynthesis();

    return (
        <div>
            <button className='lucas-gjør-dine-tailwind-greier-på-denne-knappen' onClick={() => speak({text:text})}>Speak button, (lucas gjør noe tailwind greier her) &#128483;</button>
            <p className={className}>{text}</p>
        </div>
    );
}
