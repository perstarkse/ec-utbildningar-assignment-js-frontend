import React, { useState } from 'react'
import { json } from 'react-router-dom'
import { submitData } from '../scripts/submitAndValidation'

const ContactUsForm = () => {

    const [formErrors, setFormErrors] = useState({})

    const [contactForm, setContactForm] = useState({ name: '', email: '', comments: '' })

    const [canSubmit, setCanSubmit] = useState(false)

    const [failedSubmit, setFailedSubmit] = useState(false);


    //validate on keyup only after user has tried submitting. edit handleSubmit() and handleKeyUp() to remove.
    //set to true to validate always
    const [hasTriedSubmitting, setHasTriedSubmitting] = useState(true)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setContactForm({ ...contactForm, [id]: value })
    }

    const validate = (values) => {
        const errors = {};
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const nameRegEx = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
        if (!values.name) {
            errors.name = "You must enter a name";
            document.getElementById("name").classList.add("error");
        }
        else if (!nameRegEx.test(values.name))
            errors.name = "You must enter a name... please contact if your real name is not accepted";
        else
            document.getElementById("name").classList.remove("error");
        if (!values.email) {
            errors.email = "You must enter an email address"
            document.getElementById("email").classList.add("error");
        }
        else if (!emailRegEx.test(values.email)) {
            errors.email = "You must enter a valid email address";
            document.getElementById("email").classList.add("error");
        }
        else
            document.getElementById("email").classList.remove("error");
        if (!values.comments) {
            errors.comments = "You must enter a comment"
            document.getElementById("comments").classList.add("error");
        }
        else if (values.comments.length < 5) {
            errors.comments = "You must enter a longer comment"
            document.getElementById("comments").classList.add("error");
        }
        else
            document.getElementById("comments").classList.remove("error");

        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFailedSubmit(false);
        setCanSubmit(false);
        setHasTriedSubmitting(true);
        setFormErrors(validate(contactForm));

        let name = contactForm.name;
        let email = contactForm.email;
        let comments = contactForm.comments;

        let json = JSON.stringify({ name, email, comments });

        if (Object.entries(validate(contactForm)).length === 0) {
            if (submitData("https://win22-webapi.azurewebsites.net/api/contactform", json, "POST")) {
                setCanSubmit(true);
                setFailedSubmit(false);
                setContactForm({ name: '', email: '', comments: '' });
            } else {
                setCanSubmit(false);
                setFailedSubmit(true);
            };
        } else { setCanSubmit(false) }
    }

    const handleKeyUp = () => {
        if (hasTriedSubmitting === true)
            setFormErrors(validate(contactForm));
    }

    return (
        <section className="contact-us-form container">
            <div className="title">Come in Contact with Us</div>
            {
                canSubmit ? (<div data-testid="success" className='alert alert-success text-center mt-2' role="alert"><h2>Thank you for your comment.</h2> <p>We will contact you as soon as possible.</p> </div>)
                    : (<></>)
            }
            {
                failedSubmit ? (<div data-testid="failure" className='alert alert-danger text-center mt-2' role="alert"><h2>Something went wrong...</h2></div>)
                    : (<></>)
            }
            <form action="" onSubmit={handleSubmit} noValidate>
                <div className="top">
                    <div className="form-group">
                        <input className="" type="text" name="contactUs" id="name" placeholder="Your Name"
                            onKeyUp={handleKeyUp} onChange={handleChange} value={contactForm.name} />
                        <div id="name-error" className="text-danger">{formErrors.name}</div>
                    </div>
                    <div className="form-group">
                        <input className="" type="email" name="contactUs" id="email" placeholder="Your Mail"
                            onKeyUp={handleKeyUp} onChange={handleChange} value={contactForm.email} />
                        <div id="email-error" className="text-danger">{formErrors.email}</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="form-group">
                        <input className="" type="text" name="contactUs" id="comments" placeholder="Comments"
                            onKeyUp={handleKeyUp} onChange={handleChange} data-required-min="5" value={contactForm.comments} />
                        <div data-testid="commentsError" id="comments-error" className="text-danger">{formErrors.comments}</div>
                    </div>
                </div>
                <button type='submit' className='btn-themed btn-no-styles'>Post Comments</button>
            </form>
        </section>
    )
}

export default ContactUsForm
