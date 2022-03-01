import React from 'react'
import './contactUs.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
// import SubHeader from '../../components/howItsWorksComponents/SubHeader';
import SubHeader from '../../components/header/SubHeader';
import RoomIcon from '@mui/icons-material/Room';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
// import PageOne from '../cartPages/PageOne';

const ContactUs = () => {
  return (
  <div className='contact-us-parent-div'>
    <Header />
    <SubHeader />
    <div className='contact-us-container-div'>
    <div className='contact-us-left-content-div'>
    <div className='contact-us-address-div1'>
      <div> <RoomIcon fontSize='large' className='contact-us-icon'/> </div>
    <div>
      <h4>OFFICE ADDRESS</h4>
      <p>230 Oxford Rd Kenilworth </p>
      <p>IL 60043, USA</p>
    </div>
    </div>
    <div className='contact-us-address-div2'>
    <div> <LocalPostOfficeIcon fontSize='large' className='contact-us-icon'/> </div>
    <div>
      <h4>EMAIL ADDRESS</h4>
      <p>onlinepharmas247@gmail.coms</p>
    </div>
    </div>
    </div>
    <div className='contact-us-middle-content-div'>
      <input type='text' placeholder='Name' className='contact-us-name-input'/>
      <input type='text' placeholder='Email' className='contact-us-email-input'/>
      <input type='text' placeholder='Subject' className='contact-us-subject-input'/>
      <textarea type='text' placeholder='Message' className='contact-us-message-textArea'/>
      <button className='contact-us-button'>SEND</button>
    </div>
    <div className='contact-us-right-content-div'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379000.11660131445!2d-87.98815940025392!3d42.0873691041809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc52579e0656d%3A0xafb57fc0374368dc!2s230%20Oxford%20Rd%2C%20Kenilworth%2C%20IL%2060043%2C%20USA!5e0!3m2!1sen!2sin!4v1646118257302!5m2!1sen!2sin" width="455" height="340" allowFullScreen="true" loading="lazy"></iframe>
    </div>
    </div>
    <Footer />
    {/* <PageOne /> */}
  </div>
  )
}

export default ContactUs;