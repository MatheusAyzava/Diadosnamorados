import React, { useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    const handlePlay = () => {
        audioRef.current.play();
    };

    const handlePause = () => {
        audioRef.current.pause();
    };

    const handleVolumeChange = (event) => {
        audioRef.current.volume = event.target.value;
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src="path/to/your/music/X.mp3" />
            <div className="controls">
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
                <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} />
            </div>
        </div>
    );
};

export default MusicPlayer;