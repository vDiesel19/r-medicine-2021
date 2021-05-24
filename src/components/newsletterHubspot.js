import React, { useState } from 'react';

const NewsletterHubspot = () => {
	const [state, setState] = useState({});
	const [success, setSuccess] = useState(false);
	
	const handleChange = (e) => {
		setState({ 
			...state,
			[e.target.name]: e.target.value 
		})
	};

  const handleSubmit = (e) => {
		e.preventDefault()
		const portalId = '8112310';
		const formId = '3f8feb15-4a3a-4893-9a63-a219086e993f'
		const form = new FormData(e.target);
		const formData = {
			email: form.get('email'), 
			firstname: form.get('first_name'),
			lastname: form.get('last_name'),
		};
		const postUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

		// Example request JSON:
		const body = {
      submittedAt: Date.now(),
      fields: [
        {
          name: 'firstname',
          value: formData.firstname,
        },
        {
          name: 'lastname',
          value: formData.lastname,
        },
        {
          name: 'email',
          value: formData.email,
        },
      ]
    };

		fetch(postUrl, {
      method: 'post',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      }),
    })
    .then(() => {
      setSuccess({ 
				success: true
			});
			document.getElementById('newsletter-form').reset();
    })
		.catch((error) => alert(error))
  }
	
	return (
		<div className="newsletter">
			<h3 className="newsletter__header">Join our mailing list to hear all the latest about events, news and more.</h3>
			{success &&
				<p className="newsletter__success">Thank you for joining our newsletter.</p>
			}
			<form
				id="newsletter-form"
				name="newsletter"
				method="post"
				onSubmit={(e) => handleSubmit(e)}
			>
				<input type="hidden" name="form-name" value="newsletter" />
				<div className="newsletter__wrapper">
					<div className="newsletter__field-group">
						<input type="text" name="first_name" placeholder="First Name" onChange={(e) => handleChange(e)} required />
					</div>
					<div className="newsletter__field-group">
						<input type="text" name="last_name" placeholder="Last Name" onChange={(e) => handleChange(e)} required />
					</div>
					<div className="newsletter__field-group">
						<input type="email" name="email" placeholder="Email" onChange={(e) => handleChange(e)} required />
					</div>
					<div className="newsletter__field-group">
						<button className="newsletter__submit" type="submit">Subscribe</button>
					</div>
				</div>
			</form>
		</div>
	)
};

export default NewsletterHubspot;