import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/images/round-graph-svgrepo-com.svg';
import { ReactComponent as Futura } from '../assets/images/add-circle-svgrepo-com.svg';

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
 
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    date="2024 July - Ongoing"
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Futura />}
  >
    <h4 className="vertical-timeline-element-title">React JS Developer</h4>
    <h5 className="vertical-timeline-element-title">Axobis Technologies</h5>
    <p className="vertical-timeline-element-subtitle">Calicut</p>
    <div className='skills'>
     /ReactJS /Redux /WEB_API /Material_UI /HTML /SASS /Git /WebPack
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    date="2023 Jan - 2024 July"
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Futura />}
  >
    <h4 className="vertical-timeline-element-title">Junior Software Engineer</h4>
    <h5 className="vertical-timeline-element-title">Hexeam Software solutions</h5>
    <p className="vertical-timeline-element-subtitle">Sahya Cyber Park, Calicut</p>
    <div className='skills'>
     /ReactJS /Redux /REST_API /I18next /RazorPay /Material_UI /HTML /CSS /Bootstrap /Git
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 Sep - 2022 Dec"
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Futura />}
  >
    <h4 className="vertical-timeline-element-title">MERN Stack Intern</h4>
    <h3 className="vertical-timeline-element-title">Futura Labs</h3>
    <p className="vertical-timeline-element-subtitle">Calicut</p>
    <div className='skills'>
     /ReactJS /REST_API /Material_UI /HTML /CSS /Bootstrap /NodeJs /Express /MongoDb /Git
    </div>
  </VerticalTimelineElement>
  


</VerticalTimeline>
    </div>
  )
}

export default Experience
