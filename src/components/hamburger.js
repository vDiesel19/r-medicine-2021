import React from 'react';

const Hamburger = () => {

	const toggleMenuBtn = (e) => {
		e.currentTarget.classList.toggle('is-active');
		document.querySelector('.drawer').classList.toggle('is-active');
	}
	return (
		<button className="hamburger hamburger--collapse" 
			type="button" 
			aria-expanded="false" 
			onClick={(e) => toggleMenuBtn(e)}
		>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
	);
};

export default Hamburger;