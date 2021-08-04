import React from 'react';
import Speaker from '../components/speaker';

const Workshop = (props) => {
    const { time, title, speakers } = props;

    return (
        <div className="workshop">
            <div className="workshop__time-wrapper">
                <span className="workshop__time">{time}</span>
            </div>
            <div className="workshop__content">
                <h3 className="workshop__title">{title}</h3>
                {speakers.map(speaker => {
                    <Speaker
                        name={speaker.name}
                        link={speaker.link}
                        imageUrl={speaker.imageUrl}
                    />
                })}
            </div> 
        </div>
    );
};

export default Workshop;