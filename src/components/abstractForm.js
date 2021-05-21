import React, { useState } from 'react';
import moment from 'moment-timezone';
import { navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const AbstractForm = () => {
	const [state, setState] = useState({});
	const timeZones = moment.tz.names();

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
	
	const enableSubmit = (e) => {
		if (e.target.checked) {
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
					<label htmlFor="name">Name<span>*</span> 
						<br />
						<input type="text" name="name" id="name" onChange={(e) => handleChange(e)} required />
					</label>
					<label htmlFor="organization">Organization<span>*</span>  
						<br />
						<input type="text" name="organization" id="organization" onChange={(e) => handleChange(e)} required />
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="job_title">Job Title<span>*</span>  
						<br />
						<input type="text" name="job_title" id="job_title" onChange={(e) => handleChange(e)} required />
					</label>
					<label htmlFor="email">Email<span>*</span> 
						<br />
						<input type="text" name="email" id="email" onChange={(e) => handleChange(e)} required />
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="timezone">Time Zone<span>*</span>  
						<br />
						<select name="timezone" id="timezone" onChange={(e) => handleChange(e)} required>
							<option value="">Please Select Your Timezone</option>
							{timeZones.map(zone => {
								return (
									<option value={zone} key={zone}>{zone}</option>
								);
							})}
						</select>
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="bio" className="abstract__label-textarea">Brief biography: 
						<br />
						<textarea name="bio" id="bio" rows="5" onChange={(e) => handleChange(e)}></textarea>
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="twitter">Twitter Handle: 
						<br />
						<input type="text" name="twitter" id="twitter" onChange={(e) => handleChange(e)} />
					</label>
				</div>
				<div className="abstract__field-group">
					<label htmlFor="headshot">Headshot: <span className="file-type">(jpeg, jpg, or png accepted)</span>
						<br />
						<input type="file" name="headshot" id="headshot" onChange={(e) => handleAttachment(e)} />
					</label>
				</div>
				<p className="abstract__form-subheader">R/Medicine is committed to a diverse and inclusive community. The following questions (which are optional) are asked in an effort to track our progress in increasing diversity at events, and will remain confidential.</p>
				<fieldset className="fieldset--radio">
					<legend>What gender does the primary speaker identify with?</legend>
					<label htmlFor="male">
						Male
						<input type="radio" id="male" name="gender" value="male" onClick={(e) => handleRadio(e)} />
					</label>
					<label htmlFor="female">
						Female
						<input type="radio" id="female" name="gender" value="female" onClick={(e) => handleRadio(e)} />
					</label>
					<label htmlFor="other">
						Other
						<input type="radio" id="other" name="gender" value="other" onClick={(e) => handleRadio(e)} />
					</label>
				</fieldset>
				<fieldset className="fieldset--radio">
					<legend>Does the primary speaker identify as a person of color?</legend>
					<label htmlFor="yes">
						Yes
						<input type="radio" id="yes" name="poc" value="yes" onClick={(e) => handleRadio(e)} />
					</label>
					<label htmlFor="no">
						No
						<input type="radio" id="no" name="poc" value="no" onClick={(e) => handleRadio(e)} />
					</label>
				</fieldset>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Additional Speakers</h2>
				<p className="abstract__form-subheader">We encourage team presentations! This way the person who isn't currently presenting can interact with the audience, field questions, and share links in the chat.</p>
				<fieldset>
					<legend>Additional Speaker 1</legend>
					<label htmlFor="speaker_1_name">Name: 
						<br />
						<input type="text" name="speaker_1_name" id="speaker_1_name" onChange={(e) => handleChange(e)} />
					</label>
					<label htmlFor="speaker_1_email">Email: 
						<br />
						<input type="text" name="speaker_1_email" id="speaker_1_email" onChange={(e) => handleChange(e)} />
					</label>
				</fieldset>
				<fieldset>
					<legend>Additional Speaker 2</legend>
					<label htmlFor="speaker_2_name">Name: 
						<br />
						<input type="text" name="speaker_2_name" id="speaker_2_name" onChange={(e) => handleChange(e)} />
					</label>
					<label htmlFor="speaker_2_email">Email: 
						<br />
						<input type="text" name="speaker_2_email" id="speaker_2_email" onChange={(e) => handleChange(e)} 
						/>
					</label>
				</fieldset>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Submission Details</h2>
				<fieldset className="fieldset--radio">
					<legend>Type of Submission<span>*</span></legend>
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
						Tutorial/Workshop (30 minutes to 3.5 hours)
					</label>
				</fieldset>
				<p className="abstract__form-subheader">*Please note that if your talk is selected as a <strong>Lightning</strong> talk, we will request that you submit a recording of the talk.</p>
				<p className="abstract__form-subheader">If your talk is selected, the Abstract Title you choose will be the Title shown in the conference schedule, often what attendees use as a starting point to determine if they will be interested in the talk. Choose your title carefully&mdash;make sure that it accurately describes what your talk will cover.</p>
				<div className="abstract__field-group field-group--full-width">
					<label htmlFor="abstract_title" className="abstract__label-title">Abstract Title<span>*</span> 
						<br />
						<input type="text" name="abstract_title" onChange={(e) => handleChange(e)} required />
					</label>
				</div>
				<p className="abstract__form-subheader">Provide an abstract that briefly summarizes your proposal (1250 characters maximum). Please write complete sentences, not bullet points.</p>
				<div className="abstract__field-group">
					<label htmlFor="abstract" className="abstract__label-textarea">Abstract<span>*</span>  
						<br />
						<textarea name="abstract" id="abstract" rows="10" maxLength="1250" onChange={(e) => handleChange(e)} required ></textarea>
					</label>
				</div>
				<p className="abstract__form-subheader">Please write 2-3 sentences to describe the intended audience of the talk and how your audience (and the R/Medicine community) will benefit from your presentation.</p>
				<div className="abstract__field-group">
					<label htmlFor="audience" className="abstract__label-textarea">Intended Audience<span>*</span>  
						<br />
						<textarea type="text" name="audience" id="audience" rows="5" onChange={(e) => handleChange(e)} required></textarea>
					</label>
				</div>
			</div>
			<div className="abstract__form-section">
				<h2 className="abstract__form-header">Additional Information</h2>
				<p className="abstract__form-subheader">The R/Medicine Program Committee reviews many proposals, and having extra resources helps us gauge the speaker's experience and expertise.</p>
				<p className="abstract__form-subheader">If you have any links to previous talks showcasing you or any of your speakers, please share below. Other resources, like links to published books, LinkedIn profiles, or relevant blog posts, are also appreciated. We welcome applications from new speakers, so don't worry if you don't have previous talk recordings to submit here. Even a YouTube video of yourself speaking for a couple of minutes could help the reviewers.</p>
				<div className="abstract__field-group field-group--full-width field-group--resource">
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
				<p className="abstract__form-subheader">Please read the <a href="/code-of-conduct" target="_blank">R/Medicine Code of Conduct.</a></p>
				<div className="abstract__field-group field-group--checkbox">
					<label htmlFor="code_conduct">
						<input type="checkbox" id="code_conduct" name="code_conduct" onClick={(e) => enableSubmit(e)} />
						I agree to abide by the Linux Foundation Code of Conduct.<span>*</span>
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