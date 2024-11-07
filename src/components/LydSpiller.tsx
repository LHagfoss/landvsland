import React from 'react';
import Speech from 'react-speech';

interface LydSpillerProps {
    text: string;
    className: string;
}

export default function LydSpiller({ text, className }: LydSpillerProps) {
    return (
        <div>
            <Speech 
                text={text}
                textAsButton={true}
                displayText="Spill Lyd"
                voice="no-NO"
                pitch={1}
                rate={0.8}
                volume={1}
                lang="no-NO"
            />
            <p className={className}>{text}</p>
        </div>
    );
}
