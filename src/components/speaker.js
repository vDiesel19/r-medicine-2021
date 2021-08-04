import React from 'react';


const Speaker = (props) => {
    const { name, imageUrl } = props;

    return (
        <div className="speaker">
            {imageUrl ? (
				<div className="speaker__profile-img" style={{ backgroundImage: `url(${imageUrl})` }}>
                </div>
				) : (
                <div className="speaker__profile-img">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 175"><circle cx="87.5" cy="87.5" r="87.5" fill="#04848f"/><circle cx="87.59" cy="50.11" r="30.18" fill="#5abcc4"/><path d="M142.34,137.44c-1.43-43.35-38.8-43.35-38.8-43.35h-27s-38.85,0-38.85,45.94c0,0,44.41,15.42,104.68,0Z" transform="translate(-2.5 -2.5)" fill="#5abcc4"/></svg>
                </div>
			)}
            <p className="speaker__name">{name}</p>
        </div>
    );
};

export default Speaker;