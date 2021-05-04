import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import AppContext from '../context/appContext';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Newsletter = () => {
  const [context, setContext] = useContext(AppContext);

  const handleChange = (e) => {
    setContext(Object.assign({}, context, { 
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...context,
      }),
    })
    .then(() => {
      setContext(Object.assign({}, context, { successMessage: true }));
      setTimeout(() => {
        setContext(Object.assign({}, context, { 
          successMessage: false
        }));
        form.reset();
      }, 3000);
    })
    .catch((error) => alert(error))
  }
	
	return (
    <StaticQuery
      query={graphql`
        query NewsletterQuery {
          markdownRemark(frontmatter: {id: {eq: "newsletter"}}) {
            frontmatter {
              header
              success_message
            }
          }
        }
      `}
      render={data => (
        <div className="newsletter">
          <h3 className="newsletter__header">{data.markdownRemark.frontmatter.header}</h3>
          {context.successMessage &&
            <p className="newsletter__success">{data.markdownRemark.frontmatter.success_message}</p>
          }
          <form
            name="newsletter"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <div hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={(e) => handleChange(e)} />
              </label>
            </div>
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
      )}
    />
	)
};

export default Newsletter;