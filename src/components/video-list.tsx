import React, { FC, useEffect, useState } from 'react';
import Video from './video';

const VideoList : FC<{}> = () => {
    const [videos, setVideos] = useState([0]);
    useEffect(() => {
        setVideos([1, 2, 3]);
    }, []);

    return (
        <div>
            <h1>Videos</h1>
            {videos.map((video) => {
                return (
                    <Video name={video.toString()} />
                );
            })}            
        </div>
    );
}

export default VideoList;