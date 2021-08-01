import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import arrow from '../assets/arrow_teal.svg';

const VirtualSpeakerGuide = () => {

	const toggleContent = (e) => {
		e.currentTarget.parentNode.classList.toggle('is-active');
	}

	return (
		<div>
			<Header />
			<div className="code-conduct">
				<h1 className="code-conduct__top-header">Virtual Speaker Guide</h1>
				<div className="code-conduct__container virtual-speaker__container">
					<div className="code-conduct__content">
                        <h2 className="code-conduct__header virtual-speaker__header">Welcome!</h2>
						<div className="code-conduct__text">
							<p>We are excited to welcome you as a speaker for R/Medicine 2021. As a reminder, the event will take place virtually Tuesday, August 24-27, during Eastern Daylight Time. Please click through the tabs on this page to access information.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Deadlines</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<ul>
								<li><span>Poster Submission Due Date:</span> Friday, August 20</li>
								<li><span>Pre-Recording Video Submission Due Date</span> (mandatory for lightning talks): Friday, August 20</li>
								<li><span>Speaker Training</span> (for all who will present live): TBD</li>
								<li><span>Event Dates:</span> Tuesday, August 24 – Friday, August 27</li>
								<li><span>Timezone:</span> Eastern Daylight Time</li>
							</ul>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Schedule, Timing &amp; Speaker Profiles</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>The schedule will be posted on the R/Medicine web site by Monday, August 2.</p><p>All lightning talks are ten (10) minutes in total.</p><p>All regular talks are twenty (20) minutes in total.</p><p>Please confirm your timing on the R/Medicine website schedule when it is posted on Monday, August 2.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Platform &amp; Specifications</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>We will be using the virtual event platform CrowdCast that will allow speakers to deliver content live or by pre-recorded talk, and join live for Q&amp;A during the session.</p>
							<p>Posters will be presented on SpatialChat, a platform that allows participants to interact as video and audio-enabled avatars in a virtual room. To move within a room, use your mouse and drag your avatar to a new location. Avatars who are close to each other can hear one another, so much like in real life, you hear people who are close to you but not those who are further away. To get a better sense of this experience, you can test SpatialChat <a href="https://spatial.chat/s/rmed21test" target="_blank" rel="noreferrer">here.</a></p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Poster Information</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>Posters should be in landscape format and should be uploaded as a single PDF file. The recommended poster size is A0 (118 x 84 cm), with the title in size 100 font. An example can be found <a href="" target="_blank" rel="noreferrer">here</a></p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Pre-recording Information &amp; Tools</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>All speakers may pre-record their talk, which will be played through the event platform. <span>Speakers who will give a lightning talk must submit a pre-recorded video.</span></p>
							<p>Some suggested tools to use for recording are Quicktime, Zoom, a screen recorder, or something similar. The recording should show your slides or screen and optionally yourself, using a picture in picture style format. The preferred format is MP4 however any common formats is acceptable. Please share the actual video file, not a link to a streaming service like YouTube or Vimeo. Please feel free to reach out with any questions.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Uploading Instructions for Posters and Pre-recorded Sessions</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>Please upload your poster or presentation using this <a href="https://forms.gle/bM5cAWSSnYcJDczN8" target="_blank" rel="noreferrer">Google Form</a>.</p><p><span>Submissions need to be received no later than Friday, August 20.</span></p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Live Q&amp;A</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>As with physical events, live interaction is essential to the success of virtual events and we are asking every presenter, whether presenting live or via pre-recorded session, to join for live chat with attendees during their session, within the platform. This will provide added value to the audience and create more of an 'event' experience.</p>
							<p>If you are concerned about your timezone and how that could impact the live Q&amp;A portion of your session, we will do our best to reschedule your session slot to a time that is convenient for you.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Speaker Training</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>More information on speaker training will be provided shortly.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Technical Tips for Virtual Presentations</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<ul>
								<li><span>Audio</span> – as counterintuitive as it may sound, the single most important factor in a good video, is the audio quality.</li>
								<li><span>Eliminate ambient noise</span> – close the doors and windows. You'd be surprised how much environmental noise gets picked up.</li>
								<li><span>Lighting</span> – Do not put lights overhead and don't put any lights or windows behind you as they will alter the light levels in your videos and create shadows.</li>
								<li><span>Background</span> – don't be afraid to show your natural environment – bookcases, plants, paintings – as long as they are not too distracting.</li>
								<li><span>Framing</span> – place yourself slightly off-center to the left or right rather than directly in the middle of the frame.</li>
								<li><span>Camera Height</span> – the lens should either be directly level or pointing ever so slightly downwards towards your face.</li>
								<li><span>Stand</span> – we recommend you stand during your presentation to help project your voice and improve your posture. However, if you're more comfortable sitting, then please do.</li>
								<li><span>Timer</span> – Have a clock to keep track of the time you have remaining.</li>
							</ul>
							<p>From: <a href="https://www.greatspeech.co/video-presentations/" target="_blank" rel="noreferrer">https://www.greatspeech.co/video-presentations/</a></p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Lighting, Webcam and Microphone Best Practices</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<h3>Best Practices for Lighting</h3>
							<ul>
								<li>For best results, use natural light and supplement with additional light as needed.</li>
								<li>Keep natural light in front of you to avoid shadows. A bright window behind you can make you appear as a dark silhouette.</li>
								<li>Interior rooms with no natural light source may require additional targeted lighting, such as a ring light, to brighten the speaker's face.</li>
							</ul>
							<h3>Best Practices for Webcams</h3>
							<ul>
								<li>To ensure the speaker is looking directly at the audience, place the webcam at eye level.</li>
								<li>Avoid distracting backgrounds by checking the surroundings behind you to make sure there are no distracting colors or movement.</li>
								<li>Presenters should use chairs that are adjustable for height but do not swivel. Swiveling on camera creates a poor attendee experience and can be distracting.</li>
							</ul>
							<h3>Best Practices for Microphones</h3>
							<ul>
								<li>Use external microphones whenever available, as microphones built into computers and cameras often have lower quality.</li>
								<li>An external microphone allows the speaker to place it in the optimal location for sound.</li>
								<li>Place the microphone close to the speaker's mouth, but not in the camera view.</li>
								<li>Test audio levels in advance.</li>
								<li>Manage noise by turning off fans, phones, or speakers and keep ambient noise to a minimum.</li>
								<li>Do not touch the microphone while unmuted</li>
							</ul>
							<h3>Dress Code</h3>
							<p>There is no dress code for presentations, and we encourage you to be comfortable. That said, you must be aware that the <a href="/code-of-conduct/">Code of Conduct</a> applies to this space, both in terms of what you show on camera and what you say. We ask that you be tasteful and considerate in choosing your clothing and surroundings. Keep in mind that we are a global community. Please refrain from wearing shirts with global brand logos that are not your own. Solid colors (not white) also work best instead of prints.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Live Q&amp;A</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<ul>
								<li><span>Learn the Content</span>: Familiarity with the content allows a speaker to focus on presenting, rather than trying to remember the points to make. To minimize worry about forgetting elements of the presentation, include notes in your presentation file and have a printout of your script or talking points.</li>
								<li><span>Practice Makes Perfect</span>: Speakers should practice their content delivery in the environment in which they will deliver it, such as in front of a computer. Presenting alone to a computer can be awkward at first. To make speakers more comfortable, ask colleagues, roommates, or family to sit in front so they can present to familiar faces.</li>
								<li><span>Understand the Tools</span>: Speakers should understand and utilize the content options available to them, to maximize the effectiveness of the presentation technology. It's important to know the basic functions of the software, e.g. how to advance slides, manage Q&amp;A or chats, before the presentation.</li>
								<li><span>Speak Up</span>: Check audio levels before presenting, but also make sure to breathe at regular intervals to speak audibly and clearly. Maintaining a clear, even tone throughout the presentation will allow the audience to hear it without adjusting their volume settings.</li>
								<li><span>Look at Your Camera</span>: If presenting via video, remember, the webcam is your link to your audience. Make eye contact with the camera so it appears to the audience that you are speaking directly to them.</li>
								<li><span>Don't Fear Mistakes</span>: Humans make mistakes, even during presentations. Realize that flubs happen and they won't derail your presentation – unless you let them. Just keep going in your planned presentation and remember, the audience is forgiving.</li>
								<li><span>Be Prepared</span>: During the presentation, have a glass of water nearby to sip as needed. Also, keep handy a printout of your slides or notes in case you need to refer to them.</li>
							</ul>
							<p>From: <a href="https://www.inxpo.com/assets/pdfs/litepapers/How-To-Be-An-Engaging-Speaker.pdf" target="_blank" rel="noreferrer">https://www.inxpo.com/assets/pdfs/litepapers/How-To-Be-An-Engaging-Speaker.pdf</a></p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Inclusive Speaker Orientation Online Course</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>The Linux Foundation, in collaboration with the National Center for Women in Technology (NCWIT), has created an <a href="https://training.linuxfoundation.org/content/inclusive-speaker-orientation" target="_blank" rel="noreferrer">online course</a> designed to teach the viewer about inclusion, diversity, and unconscious bias. We highly recommend all of our speakers, <a href="https://training.linuxfoundation.org/content/inclusive-speaker-orientation" target="_blank" rel="noreferrer">watch the course</a> to learn tips/tools to use when speaking to encourage inclusivity in presentations and messaging.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Code of Conduct</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>Please read and abide by our code of conduct, which can be found <a href="/code-of-conduct/">here</a>. We ask that speakers especially review this code of conduct and are inclusive in the <span>words and images</span> used during their presentation.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Additional Resources</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p><span><a href="https://www.cnet.com/how-to/best-gear-for-online-meetings-webcams-lights-mics-tripods-and-more/" target="_blank" rel="noreferrer">Best Gear for Online Meetings</a></span> – Webcams, lights, mics, tripods and more</p>
							<p><span><a href="https://www.greatspeech.co/video-presentations/#.XtFN_y_Mx-U" target="_blank" rel="noreferrer">19 Video Presentation Tips</a></span> to help you give a great presentation (even if you hate the way you look on camera)</p>
							<p><span><a href="https://pantheon.io/blog/tips-for-virtual-presentations" target="_blank" rel="noreferrer">9 Tips for Giving Engaging Virtual Presentations</a></span> – This article gives 9 tips and within each tip has folks from the tech world giving their advice in a fun/relatable way.</p>
							<p><span><a href="https://magneticspeaking.com/9-important-tips-for-virtual-presentations/" target="_blank" rel="noreferrer">PACE Acronym for Virtual Presentations</a></span></p>
							<p><span><a href="https://www.blueskyelearn.com/for-presenters-a-virtual-event-checklist/" target="_blank" rel="noreferrer">Checklist for Speakers</a></span> – this article provides checklists applicable for speakers that are live streaming.</p>
						</div>
					</div>
					<div className="code-conduct__content">
						<div class="code-conduct__toggle-wrapper" onClick={(e) => toggleContent(e)}>
							<h2 className="code-conduct__header">Contact Us</h2>
							<button className="code-conduct__arrow">
								<img src={arrow} alt="" />
							</button>
						</div>
						<div className="code-conduct__text virtual-speaker__text">
							<p>If you have any other platform, speaker, or schedule-related questions, please contact us at <a href="mailto:r-medicine-conf@r-consortium.org">r-medicine-conf@r-consortium.org</a>.</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default VirtualSpeakerGuide;