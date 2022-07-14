import React, {useEffect} from 'react'
import profileImage from './assets/images/profile.svg'
import gmail from './assets/images/gmail.svg'
import linkedin from './assets/images/linkedin.svg'
import github from './assets/images/github.svg'
import { profile, portfolio, skills } from './data'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function App() {
  const data = {
    profile,
    portfolio,
    skills
  }
  useEffect(() => {
    document.title = 'Edo Prayoga - Personal Website'
  }, [])
  return (
    <div className='container-fluid d-flex flex-column align-items-center' style={{ padding: '0px', background: '#041F31' }}>
      <nav className='d-flex align-items-center' style={{ width: '90%', padding: '30px 0px'}}>
        <p className='m-0' style={{ color: '#BDEBEA' }}>Home</p>
        <p style={{ color: '#BDEBEA', margin: '0px 80px 0px auto' }}>Project</p>
        <button style={{ padding: '12px 20px', background: 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)', borderRadius: '6px' }}>
          Contact
        </button>
      </nav>
      {/* Main Section */}
      <section className='d-flex align-items-center' style={{ width: '90%', padding: '100px 0px', marginBottom: '130px' }}>
        <div className='d-flex flex-column w-50' style={{ paddingRight: '80px' }}>
          <span style={{ fontSize: '20px', lineHeight: '23px', color: '#D7E5EC' }}>
            {data.profile.role}
          </span>
          <span style={{ marginBottom: '10px', fontSize: '72px', fontWeight: '600', background: 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
            {data.profile.fullname}
          </span>
          <p style={{ color: '#BDEBEA', letterSpacing: '0.04em' }}>
            {data.profile.bio}
          </p>
          <div className='d-flex'>
            <button style={{ padding: '12px 20px', background: 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)', borderRadius: '6px' }}>
              Contact Me
            </button>
          </div>
        </div>
        <div className='d-flex w-50 justify-content-end'>
          <img src={profileImage} alt='Profile' />
        </div>
      </section>
      {/* About me */}
      <section className='d-flex' style={{ width: '90%', marginBottom: '130px' }}>
        <div className='d-flex flex-column w-75'>
          <span style={{ fontSize: '24px', fontWeight: '600', color: '#BDEBEA', marginBottom: '20px' }}>
            About me
          </span>
          <span style={{ fontSize: '18px', color: '#BDEBEA', paddingLeft: '15px', borderLeft: '5px solid #00D9F5', borderRadius: '2px' }}>
            {data.profile.about}
          </span>
        </div>
      </section>
      {/* Project portfolio */}
      <section className='d-flex flex-column' style={{ width: '90%', marginBottom: '130px' }}>
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
      <section className='d-flex flex-column align-items-center' style={{ width: '20%' }}>
        <div className='d-flex align-items-center w-100' style={{ marginBottom: '40px' }}>
          <div className='d-flex flex-column align-items-center'>
            <img src={gmail} alt='gmail' style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '0.12em', color: '#BDEBEA' }}>
              GMAIL
            </span>
          </div>
          <div className='d-flex flex-column align-items-center' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <img src={linkedin} alt='linkedin' style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '0.12em', color: '#BDEBEA' }}>
              LINKEDIN
            </span>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <img src={github} alt='github' style={{ marginBottom: '5px' }} />
            <span style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '0.12em', color: '#BDEBEA' }}>
              GITHUB
            </span>
          </div>
        </div>
        <div className='d-flex align-items-center w-50' style={{ marginBottom: '40px' }}>
          <span style={{ fontSize: '14px', fontWeight: '400', color: '#BDEBEA' }}>
            Project
          </span>
          <span style={{ fontSize: '14px', fontWeight: '400', color: '#BDEBEA', marginLeft: 'auto' }}>
            Contact
          </span>
        </div>
        <span style={{ fontSize: '14px', fontWeight: '400', letterSpacing: '0.04em', color: '#BDEBEA', marginBottom: '40px' }}>
          Copyright © 2022 Edo Prayoga
        </span>
      </section>
    </div>
  )
}
