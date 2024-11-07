import React from 'react';

interface LydSpillerProps {
    text: string;
    className: string;
}

export default function LydSpiller({ text, className }: LydSpillerProps) {
    return (
        <div>
            <p className={className}>{text}</p>
        </div>
    );
}
