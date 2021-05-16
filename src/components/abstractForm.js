import React, { useState, useContext, useEffect } from 'react';
import { navigate } from 'gatsby';
import AppContext from '../context/appContext';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const AbstractForm = () => {
	const [state, setState] = useState({});
	const [context, setContext] = useContext(AppContext);

	const showModal = (e) => {
		e.preventDefault();
		setContext(Object.assign({}, context, { 
      showModal: true
    }));
	}

	useEffect(() => {
    if (context.showModal) {
			setContext(Object.assign({}, context, { 
				showModal: true
			}));
		}	
  }, [context.showModal]);

  const handleChange = (e) => {
		setState({ 
			...state, 
			[e.target.name]: e.target.value 
		});
	}
	
	const handleAttachment = (e) => {
    setState({ 
			...state, 
			[e.target.name]: e.target.files[0] 
		})
	}
	
	const handleRadio = (e) => {
    setState({ 
			...state, 
			[e.target.name]: e.target.value
		})
	}
	
	const enableSubmit = () => {
		const conductInput = document.getElementById('code_conduct');
		const hardwareInput = document.getElementById('hardware');
		if (conductInput.checked && hardwareInput.checked) {
			document.getElementById('abstract-submit').disabled = false;
		} else {
			document.getElementById('abstract-submit').disabled = true;
		}
	}

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
		.then(() => {
			navigate(form.getAttribute('action'))
		})
		.catch((error) => alert(error))
	}
	
	return (
		<form
			name="abstract"
			method="post"
			action="/thank-you/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			onSubmit={(e) => handleSubmit(e)}
		>
			<input type="hidden" name="form-name" value="abstract" />
			<div hidden>
				<label>
					Don’t fill this out: <input name="bot-field" onChange={(e) => handleChange(e)} />
				</label>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Primary Speaker Information</h2>
				<div className="abstract__field-group">
					<label htmlFor="name">Name: 
						<br />
						<input type="text" name="name" placeholder="" onChange={(e) => handleChange(e)} required />
					</label>
					<label htmlFor="email">Email: 
						<br />
						<input type="text" name="email" placeholder="" onChange={(e) => handleChange(e)} required />
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="organization">Organization: 
						<br />
						<input type="text" name="organization" placeholder="" onChange={(e) => handleChange(e)} required />
					</label>
					<label htmlFor="job_title">Job Title: 
						<br />
						<input type="text" name="job_title" placeholder="" onChange={(e) => handleChange(e)} required />
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="bio">Biography: 
						<br />
						<textarea name="bio" id="bio" placeholder="" onChange={(e) => handleChange(e)}></textarea>
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="twitter">Twitter Handle: 
						<br />
						<input type="text" name="twitter" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="headshot">Headshot: [jpeg, jpg, or png]
						<br />
						<input type="file" name="headshot" onChange={(e) => handleAttachment(e)} />
					</label>
				</div>
				<p className="abstract__form-subheader">R/Medicine is committed to a diverse and inclusive community. The following questions (which are optional) are asked in an effort to track our progress in increasing diversity at events, and will remain confidential.</p>
				<fieldset>
					<legend>What gender does the primary speaker identify with?</legend>
					<label htmlFor="male">
						<input type="radio" id="male" name="gender" value="male" onClick={(e) => handleRadio(e)} />
						Male
					</label>
					<label htmlFor="female">
						<input type="radio" id="female" name="gender" value="female" onClick={(e) => handleRadio(e)} />
						Female
					</label>
					<label htmlFor="other">
						<input type="radio" id="other" name="gender" value="other" onClick={(e) => handleRadio(e)} />
						Other
					</label>
				</fieldset>
				<fieldset>
					<legend>Does the primary speaker identify as a person of color?</legend>
					<label htmlFor="yes">
						<input type="radio" id="yes" name="poc" value="yes" onClick={(e) => handleRadio(e)} />
						Yes
					</label>
					<label htmlFor="no">
						<input type="radio" id="no" name="poc" value="no" onClick={(e) => handleRadio(e)} />
						No
					</label>
				</fieldset>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Additional Speakers</h2>
				<fieldset>
					<legend>Additional Speaker 1</legend>
					<label htmlFor="name">Name: 
						<br />
						<input type="text" name="name" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
					<label htmlFor="email">Email: 
						<br />
						<input type="text" name="email" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
				</fieldset>
				<fieldset>
					<legend>Additional Speaker 2</legend>
					<label htmlFor="name">Name: 
						<br />
						<input type="text" name="name" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
					<label htmlFor="email">Email: 
						<br />
						<input type="text" name="email" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
				</fieldset>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Submission Details</h2>
				<fieldset>
					<legend>Type of Submission</legend>
					<label htmlFor="lightning">
						<input type="radio" id="lightning" name="submission_type" value="lightning" onClick={(e) => handleRadio(e)} required />
						Lightning talk (10 minutes)
					</label>
					<label htmlFor="regular">
						<input type="radio" id="regular" name="submission_type" value="regular" onClick={(e) => handleRadio(e)} />
						Regular talk (20 minutes)
					</label>
					<label htmlFor="workshop">
						<input type="radio" id="workshop" name="submission_type" value="workshop" onClick={(e) => handleRadio(e)} />
						Workshop Proposal
					</label>
				</fieldset>
				<p className="abstract__form-subheader">If your talk is selected, the Abstract Title you choose will be the Title shown in the conference schedule, often what attendees use as a starting point to determine if they will be interested in the talk. Choose your title carefully - make sure that it accurately describes what your talk will cover.</p>
				<div className="abstract__field-group">
					<label htmlFor="abstract_title">Abstract Title: 
						<br />
						<input type="text" name="abstract_title" placeholder="" onChange={(e) => handleChange(e)} required />
					</label>
				</div>
				<p className="abstract__form-subheader">Please write 2-3 sentences to describe the intended audience of the talk and how your audience (and the R/Medicine community) will benefit from your presentation.</p>
				<div className="abstract__field-group">
					<label htmlFor="abstract">Abstract: 
						<br />
						<textarea name="abstract" id="abstract" placeholder="" maxLength="250" onChange={(e) => handleChange(e)} required ></textarea>
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="audience">Intended Audience: 
						<br />
						<input type="text" name="audience" id="audience" placeholder="" onChange={(e) => handleChange(e)} required />
					</label>
				</div>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Additional Information</h2>
				<p className="abstract__form-subheader">The R/Medicine Program Committee reviews many proposals, and having extra resources helps us gauge the speaker's experience and expertise.</p>
				<p className="abstract__form-subheader">If you have any links to previous talks showcasing you or any of your speakers, please share below. Other resources, like links to published books, LinkedIn profiles, or relevant blog posts, are also appreciated. We welcome applications from new speakers, so don't worry if you don't have previous talk recordings to submit here. Even a YouTube video of yourself speaking for a couple of minutes could help the reviewers.</p>
				<div className="abstract__field-group">
					<label htmlFor="resource_1">Resource 1:
						<br />
						<input type="text" name="resource_1" id="resource_1" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
					<label htmlFor="resource_2">Resource 2:
						<br />
						<input type="text" name="resource_2" id="resource_2" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
					<label htmlFor="resource_3">Resource 3:
						<br />
						<input type="text" name="resource_3" id="resource_3" placeholder="" onChange={(e) => handleChange(e)} />
					</label>
				</div>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Code of Conduct</h2>
				<p className="abstract__form-subheader">Please read the <a href="#" onClick={(e) => showModal(e)}>R/Medicine Code of Conduct.</a></p>
				<div className="abstract__field-group">
					<label htmlFor="code_conduct">
						<input type="checkbox" id="code_conduct" name="code_conduct" onClick={() => enableSubmit()} />
						I agree to abide by the Linux Foundation Code of Conduct.
					</label>
				</div>
				<p className="abstract__form-subheader">This event will be online only. We require presenters to help in creating the best experience possible. Please confirm that you have access to a computer with a camera, microphone and high-speed internet for delivering your presentation online.</p>
				<div className="abstract__field-group">
					<label htmlFor="hardware">
						<input type="checkbox" id="hardware" name="hardware" onClick={() => enableSubmit()} />
						I do.
					</label>
				</div>
			</div>
			<div className="abstract__field-group">
				<button className="abstract__submit" id="abstract-submit" type="submit" disabled>Submit</button>
			</div>
		</form>
	)
};

export default AbstractForm;