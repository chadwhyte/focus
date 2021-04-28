import React, { FC } from 'react';
import './video.css';

export interface IVideo {
    name: string;
}

export const Video : FC<IVideo> = (video: IVideo) => {
    return (
        <div className="video-container">
            <span>{video.name}</span>
        </div>
    );
}

export default Video;