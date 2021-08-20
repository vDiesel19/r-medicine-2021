import React from 'react';
import Speaker from '../components/speaker';

const Workshop = (props) => {
    const { time, title, creditLogo, speakers } = props;

    return (
        <div className={`workshop${title == "Break" ? " break" : ""}${title == "Birds of a Feather Sessions" ? " bof" : ""}`}>
            <div className="workshop__time-wrapper">
                <span className="workshop__time">{time}</span>
            </div>
            <div className="workshop__content">
                <h3 className="workshop__title">{title}</h3>
                {speakers.length ? (
                    <div className="workshop__speakers">
                        {speakers.map(speaker => {
                            return (
                                <Speaker
                                    name={speaker.name}
                                    imageUrl={speaker.imageUrl}
                                    creditLogo={speaker.creditLogo}
                                />
                            );
                        })}
                    </div>
                    ) : (
                    ""
			    )}
            </div> 
        </div>
    );
};

export default Workshop;