import React, { FC, useEffect, useState } from 'react';

const VideoList : FC<{}> = () => {
    const [videos, setVideos] = useState([0]);
    useEffect(() => {
        setVideos([1, 2, 3]);
    }, []);

    return (
        <div>
            <h1>Videos</h1>
            <ul>
                {videos.map((video) => {
                    return (
                        <li>{`video ${video}`}</li>
                    );
                })}            
            </ul>
        </div>
    );
}

export default VideoList;