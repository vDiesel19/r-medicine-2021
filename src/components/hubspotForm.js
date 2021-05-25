import React from 'react';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

const HubspotForm = () => {
	const { loaded, error, formCreated } = useHubspotForm({
		portalId: '8112310',
		formId: '3f8feb15-4a3a-4893-9a63-a219086e993f',
		target: '#r-med-hubspot-form'
	});

	return (
		<div className="newsletter">
			<h3 className="newsletter__header">Join our mailing list to hear all the latest about events, news and more.</h3>
			<div id="r-med-hubspot-form"></div>
		</div>
	);
}

export default HubspotForm;