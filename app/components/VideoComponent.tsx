import React from 'react';

const VideoComponent = ({ videoLink }: {
    videoLink: string
}) => {
    return (
        <div className="flex place-items-center justify-center p-5">
            <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-lg">
                <iframe
                    className="w-full h-72 md:h-[30rem]"
                    src={videoLink}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoComponent;
