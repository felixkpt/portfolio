import React from 'react'
import './Contact.scss'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import InlineLoader from '../../Components/Loaders'
import emailjs from '@emailjs/browser';

const Contact = ({ showTitle }) => {
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    const getContacts = async () => {
      const data = await axios.get('/resources/contacts.json')
      setContacts(() => data.data)
    }
    getContacts()
  }, [])

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_rvtxr19', 'template_dut6uag', formRef.current, 'poBen1OGRfXqmp7cz')
      .then((result) => {
        // console.log(result.text);
        setResp(result.text + ', Your message has been sent. Thank you!')
      }, (error) => {
        console.log(error.text);
        setResp('Oops! ' + error.text)
      });

  }

  const [resp, setResp] = useState('')
  const [width, setSize] = useState(window.innerWidth);
  const updateSize = () =>
      setSize(window.innerWidth);
      
  useEffect(() => {window.onresize = updateSize}, []);

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__overlay"></div>
        <div className="contact__inner">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              {
                contacts !== null ?
                  (
                    <>
                      <div className="c-info__item">
                        <FaWhatsapp size={width > 768 ? 60 : 30} className="c-icon whatsapp" />
                        {contacts.phone}
                      </div>
                      <div className="c-info__item">
                        <FaLinkedin size={width > 768 ? 60 : 30} className="c-icon linkedin" />
                        {contacts.linkedIn}
                      </div>
                      <div className="c-info__item">
                        <FaTwitter size={width > 768 ? 60 : 30} className="c-icon twitter" />
                        {contacts.twitter}
                      </div>
                      <div className="c-info__item">
                        <FaFacebook size={width > 768 ? 60 : 30} className="c-icon facebook" />
                        {contacts.facebook}
                      </div>
                      <div className="c-info__item">
                        <FaMailBulk size={width > 768 ? 60 : 30} className="c-icon email" />
                        {contacts.email}
                      </div>
                    </>
                  ) : <InlineLoader text="Loading..." />
              }
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b> Get in touch. Always available for freelancing projects.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="to_name" value="Felix" />
              <div>
                <input type="text" placeholder="Your Name" name="user_name" />
              </div>
              <div>
                <input type="email" required placeholder="Your Email" name="user_email" />
              </div>
              <div>
                <input type="text" placeholder="Subject" name="user_subject" />
              </div>
              <div>
                <textarea rows="7" name="message" placeholder="Message" id="message">
                </textarea>
              </div>
              <button>Submit</button>
              <div className="response">{resp !== '' && resp}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact