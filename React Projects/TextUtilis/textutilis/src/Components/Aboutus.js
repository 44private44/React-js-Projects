import React from 'react'
import darkimage from '../Images/community.png';
import lightimage from '../Images/community2.png';


export default function Aboutus(props) {
  return (
    <div className='aboutUsMainDiv d-flex row'>
      <div className='col-6'>
        {props.mode === 'dark' ? <img src={darkimage} alt="Community" /> : <img src={lightimage} alt="Community" />}
      </div>
      <div className={`col-6 aboutSecondContent text-${props.mode === 'light' ? 'dark' : 'light'}`} >
        <div>
          <h3>WHO WE ARE</h3>
          <p>We are a Consummate Custom Software Development company delivering splendid business IT Solutions and related services to customers across the globe. Our development services are led by our dedicated and passionate team to provide best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our proficiency in understanding business challenges and professional competence allows us to create a better experience for our customers.</p>
        </div>
        <div className='mt-4'>
          <h3>WE'RE DIFFERENT THAN THE REST</h3>
          <p>We have successfully served for more than 1800 success stories ranging from Enterprise level to Start-ups, who have grown alongside the success of the company.
            <br /> At present we are a Robust Team having diverse skills with more than 21+ years of Technology experience engaging with customers at Deeper level to provide cutting edge solutions and innovations.  </p>
        </div>
        <div className='mt-4 '>
          <h3>2022</h3>
          <p> Pixlr E was launched. The advanced photo editor designed for more detailed image editing and pro-like content creation was introduced to transform simple images into masterpieces - with its next-level AI editing capabilities. </p>
        </div>
        <div className='mt-4 '>
          <h3>2023</h3>
          <p> Still integral to the INMAGINE ecosystem, PIXLR expands to more than just photo editing. Moving into animation and video, PIXLR provides wider services and features to enable users to do quicker and more advanced editing other tools in the market charge a high premium for. </p>
        </div>
      </div>
    </div>
  )
}
