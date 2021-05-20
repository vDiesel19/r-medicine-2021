import React, { useContext } from 'react';
import AppContext from '../context/appContext';

const NewsletterHubspot = () => {
	const [context, setContext] = useContext(AppContext);

  const handleChange = (e) => {
    setContext(Object.assign({}, context, { 
      [e.target.name]: e.target.value
    }));
  }

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

    const xhr = new XMLHttpRequest();
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
      ],
    };

		/*
		fetch(postUrl, {
      method: 'post',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      }),
    })
    .then(() => {
      setContext(Object.assign({}, context, { successMessage: true }));
      setTimeout(() => {
        setContext(Object.assign({}, context, { 
          successMessage: false
        }));
      }, 3000);
    })
		.catch((error) => alert(error))
		*/

		var final_data = JSON.stringify(body);
		xhr.open("POST", postUrl);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				alert(xhr.responseText); 
			} else if (xhr.readyState == 4 && xhr.status == 400) {
				alert(xhr.responseText); 
			} else if (xhr.readyState == 4 && xhr.status == 403) {
				alert(xhr.responseText);
			} else if (xhr.readyState == 4 && xhr.status == 404) {
				alert(xhr.responseText);
			}
		};
		// Sends the request
		xhr.send(final_data);
  }
	
	return (
		<div className="newsletter">
			<h3 className="newsletter__header">join our newsletter</h3>
			{context.successMessage &&
				<p className="newsletter__success">thank you</p>
			}
			<form
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