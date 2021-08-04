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
                <div className="workshop__speakers">
                    {speakers.map(speaker => {
                        return (
                            <Speaker
                                name={speaker.name}
                                imageUrl={speaker.imageUrl}
                            />
                        );
                    })}
                </div>
            </div> 
        </div>
    );
};

export default Workshop;