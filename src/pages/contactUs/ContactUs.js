import React from 'react'
import './contactUs.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SubHeader from '../../components/howItsWorksComponents/SubHeader'
import RoomIcon from '@mui/icons-material/Room';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const ContactUs = () => {
  return (
  <div className='contact-us-parent-div'>
    <Header />
    <SubHeader />
    <div className='contact-us-container-div'>
    <div className='contact-us-left-content-div'>
    <div> <RoomIcon /> </div>
    <div>
      <h4>OFFICE ADDRESS</h4>
      <p>230 Oxford Rd Kenilworth </p>
      <p>IL 60043, USA</p>
    </div>
    <div> <LocalPostOfficeIcon /> </div>
    <div>
      <h4>EMAIL ADDRESS</h4>
      <p>onlinepharmas247@gmail.coms</p>
    </div>
    </div>
    <div className='contact-us-middle-content-div'>
      <input type='text' placeholder='Name' className='contact-us-name-input'/>
      <input type='text' placeholder='email' className='contact-us-email-input'/>
      <input type='text' placeholder='subject' className='contact-us-subject-input'/>
      <textarea type='text' placeholder='Message' className='contact-us-message-textArea'/>
      <button className='contact-us-button'>Send</button>
    </div>
    <div className='contact-us-middle-content-div'><h1>Map</h1></div>
    </div>
    <Footer />
  </div>
  )
}

export default ContactUs;