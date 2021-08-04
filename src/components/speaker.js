import React from 'react';

const Speaker = (props) => {
    const { name, link, imageUrl } = props;

    return (
        <div className="speaker">
            <div className="speaker__profile-img">
                <img src={imageUrl} alt="" />
                <p>{link}</p>
            </div>
            <p className="speaker__name">{name}</p>
        </div>
    );
};

export default Speaker;