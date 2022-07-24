import React, {useEffect} from 'react'
import profileImage from './assets/images/profile.svg'
import gmail from './assets/images/gmail.svg'
import linkedin from './assets/images/linkedin.svg'
import github from './assets/images/github.svg'
import { profile, portfolio, skills } from './data'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css"
export default function App() {
  const data = {
    profile,
    portfolio,
    skills
  }
  const scrollTo = (target) => {
    document.getElementById(target).scrollIntoView();
  }
  useEffect(() => {
    document.title = 'Edo Prayoga - Personal Website'
  }, [])
  return (
    <div className='container-fluid d-flex flex-column align-items-center' style={{ padding: '0px', background: '#041F31' }}>
      <header className='d-flex align-items-center' style={{ width: '90%', padding: '30px 0px'}}>
        <p className='m-0' style={{ color: '#BDEBEA' }}>Home</p>
        <p onClick={() => scrollTo('project')} style={{ color: '#BDEBEA', margin: '0px 80px 0px auto', cursor: 'pointer' }}>Project</p>
        <button onClick={() => scrollTo('contact')} style={{ padding: '12px 20px', background: 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)', borderRadius: '6px' }}>
          Contact
        </button>
      </header>
      {/* Main Section */}
      <section className='d-flex align-items-center' style={{ width: '90%', padding: '100px 0px', marginBottom: '130px' }}>
        <div className='d-flex flex-column w-50' id='div1' style={{ paddingRight: '80px' }}>
          <span style={{ fontSize: '20px', lineHeight: '23px', color: '#D7E5EC' }}>
            {data.profile.role}
          </span>
          <span id='fullname'>
            {data.profile.fullname}
          </span>
          <p id='bio'>
            {data.profile.bio}
          </p>
          <div className='d-flex'>
            <button onClick={() => scrollTo('contact')} style={{ padding: '12px 20px', background: 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)', borderRadius: '6px' }}>
              Contact
            </button>
          </div>
        </div>
        <div className='d-flex w-50 justify-content-end' id="image-div">
          <img src={profileImage} id="image" alt='Profile' />
        </div>
      </section>
      {/* About me */}
      <section className='d-flex' style={{ width: '90%', marginBottom: '130px' }}>
        <div className='d-flex flex-column w-75' id='about-div'>
          <span style={{ fontSize: '24px', fontWeight: '600', color: '#BDEBEA', marginBottom: '20px' }}>
            About me
          </span>
          <span style={{ fontSize: '18px', color: '#BDEBEA', paddingLeft: '15px', borderLeft: '5px solid #00D9F5', borderRadius: '2px' }}>
            {data.profile.about}
          </span>
        </div>
      </section>
      {/* Project portfolio */}
      <section className='d-flex flex-column' id='project' style={{ width: '90%', marginBottom: '130px' }}>
        <span style={{ fontSize: '24px', fontWeight: '600', color: '#BDEBEA', marginBottom: '20px' }}>
          My project
        </span>
        <div className='row'>
          {data.portfolio.length > 0 ? data.portfolio.map((element, index) => (
            <div key={index} className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div className='d-flex flex-column' style={{ width: '95%', background: '#222525', height: '800px', borderRadius: '10px' }}>
                <div style={{ borderRadius: '10px 10px 0px 0px', marginBottom: '25px', height: '388px', minHeight: '388px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url("/${element.image}")` }} />
                <div className='d-flex flex-column' style={{ paddingLeft: '20px', paddingRight: '20px', textOverflow: 'ellipsis', height: '412px', paddingBottom: '20px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '600', color: '#D9F2F2', marginBottom: '15px' }}>
                    {element.title}
                  </span>
                  <div className='row'>
                    {element.tech_stack.map((element, index) => (
                      <div key={index} className='col-auto mb-3'>
                        <span style={{ padding: '5px 10px', background: 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)', borderRadius: '5px', fontSize: '14px' }}>
                          {element}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span style={{ fontSize: '16px', color: '#BDEBEA', marginBottom: '10px' }}>
                    {element.description}
                  </span>
                  <div className='d-flex align-items-center' style={{ marginTop: 'auto', width: '100%' }}>
                    <a href={element.demo} target='_blank' rel="noreferrer">
                      <button style={{ padding: '5px 10px', background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)', color: 'black', border: 'none', borderRadius: '7px' }}>
                        Live Demo
                      </button>
                    </a>
                    <a href={element.source_code} target='_blank' rel="noreferrer" style={{ marginLeft: 'auto' }}>
                      <button style={{ padding: '5px 10px', background: 'linear-gradient(90deg, #cc2b5e 0%, #753a88 100%)', color: 'white', border: 'none', borderRadius: '7px' }}>
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )) : 'No Portfolio Found'}
        </div>
      </section>
      {/* My Skill */}
      <section className='d-flex flex-column' style={{ width: '90%', marginBottom: '130px' }}>
        <span style={{ fontSize: '24px', fontWeight: '600', color: '#BDEBEA', marginBottom: '20px' }}>
          Skills
        </span>
        <div className='row'>
          {data.skills.length > 0 ? data.skills.map((element, index) => (
            <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 d-flex justify-content-center'>
              <div className='d-flex flex-column align-items-center' style={{ width: '50%' }}>
                <img src={`/${element.image}`} alt='javascript' style={{ marginBottom: '10px', minHeight: '150px', maxHeight: '150px' }} />
                <span style={{ fontSize: '16px', fontWeight: '400', letterSpacing: '0.13538em', color: '#BDEBEA' }}>
                  {element.name}
                </span>
              </div>
            </div>
          )) : 'No Skill'}
        </div>
      </section>
      <footer className='d-flex flex-column align-items-center w-100' id='contact'>
        <div className='d-flex align-items-center w-25' id='contact-div'>
          <div className='d-flex flex-column align-items-center' style={{ cursor: 'pointer' }} onClick={() => window.location = 'mailto:edoprayoga.se@gmail.com'}>
            <img src={gmail} alt='gmail' style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '0.12em', color: '#BDEBEA' }}>
              GMAIL
            </span>
          </div>
          <div className='d-flex flex-column align-items-center' style={{ marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/edoprayoga/','_blank')}>
            <img src={linkedin} alt='linkedin' style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '0.12em', color: '#BDEBEA' }}>
              LINKEDIN
            </span>
          </div>
          <div className='d-flex flex-column align-items-center' style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/edoprayoga1999', '_blank')}>
            <img src={github} alt='github' style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '0.12em', color: '#BDEBEA' }}>
              GITHUB
            </span>
          </div>
        </div>
        <span id='copyright-text'>
          Whatsapp / Telp: <a href='https://wa.me/6281268490252' style={{ textDecoration: 'none' }} >+62-812-6849-0252</a>
        </span>
        <span id='copyright-text' style={{ marginBottom: '30px' }}>
          Copyright © 2022 Edo Prayoga
        </span>
      </footer>
    </div>
  )
}
