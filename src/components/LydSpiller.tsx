import React, { useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function LydSpiller({ audioSrc }: { audioSrc: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<ReactAudioPlayer>(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.audioEl.current?.pause();
            } else {
                audioRef.current.audioEl.current?.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <ReactAudioPlayer
                ref={audioRef}
                src={audioSrc}
                controls={false}
                autoPlay={false}
                className=""
            />
        </div>
    );
}
