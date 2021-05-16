import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AbstractForm from '../components/abstractForm';
import CodeConductModal from '../components/codeConductModal';

const Abstract = () => {
	return (
		<div>
			<Header />
            <CodeConductModal />
			<div className="abstract">
				<h1>Abstract Submission</h1>
                <div className="abstract__form-wrapper">
                    <AbstractForm />
                </div>
			</div>
			<Footer />
		</div>
	);
};

export default Abstract;