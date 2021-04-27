import React, { FC } from 'react';

export interface IVideo {
    name: string;
}

export const Video : FC<IVideo> = (video: IVideo) => {
    return (
        <div>
            <span>{video.name}</span>
        </div>
    );
}

export default Video;