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
   
    date="2023 Jan - Ongoing"
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<Futura />}
  >
    <h4 className="vertical-timeline-element-title">Junior Software Solutions</h4>
    <h5 className="vertical-timeline-element-title">Hexeam Software solutions</h5>
    <p className="vertical-timeline-element-subtitle">Sahya Cyber Park, Calicut</p>
    <p>
      Skills: ReactJS, Redux, REST API, I18next, RazorPay, Material UI, HTML, CSS, Bootstrap, Git
    </p>
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
    <p>
    Skills: ReactJS, REST API, Material UI, HTML, CSS, Bootstrap, NodeJs, Express, MongoDb, Git
    </p>
  </VerticalTimelineElement>
  


</VerticalTimeline>
    </div>
  )
}

export default Experience
