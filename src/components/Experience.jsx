import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <div className="timeline-shell">
      <VerticalTimeline lineColor="rgba(148, 163, 184, 0.25)" animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2025 Jan - Ongoing"
          iconStyle={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', color: '#fff' }}
          icon={<Briefcase size={16} />}
          contentStyle={{ background: 'rgba(17, 24, 39, 0.92)', border: '1px solid rgba(148, 163, 184, 0.2)', boxShadow: '0 20px 45px rgba(2, 8, 23, 0.32)' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.92)' }}
        >
          <h4 className="vertical-timeline-element-title">Software Developer</h4>
          <h5 className="vertical-timeline-element-title">Hybrhind (Alhind Group of Companies)</h5>
          <p className="vertical-timeline-element-subtitle">Calicut</p>
          <div className="timeline-tags">/ReactJS /TypeScript /Shadcn components /Forex /Gitlab /SASS</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 July - 2024 Dec"
          iconStyle={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', color: '#fff' }}
          icon={<Briefcase size={16} />}
          contentStyle={{ background: 'rgba(17, 24, 39, 0.92)', border: '1px solid rgba(148, 163, 184, 0.2)', boxShadow: '0 20px 45px rgba(2, 8, 23, 0.32)' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.92)' }}
        >
          <h4 className="vertical-timeline-element-title">React JS Developer</h4>
          <h5 className="vertical-timeline-element-title">Axobis Technologies</h5>
          <p className="vertical-timeline-element-subtitle">Calicut</p>
          <div className="timeline-tags">/ReactJS /Redux /WEB_API /Material_UI /HTML /Git /WebPack</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 Jan - 2024 July"
          iconStyle={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', color: '#fff' }}
          icon={<Briefcase size={16} />}
          contentStyle={{ background: 'rgba(17, 24, 39, 0.92)', border: '1px solid rgba(148, 163, 184, 0.2)', boxShadow: '0 20px 45px rgba(2, 8, 23, 0.32)' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.92)' }}
        >
          <h4 className="vertical-timeline-element-title">Junior Software Engineer</h4>
          <h5 className="vertical-timeline-element-title">Hexeam Software solutions</h5>
          <p className="vertical-timeline-element-subtitle">Sahya Cyber Park, Calicut</p>
          <div className="timeline-tags">/ReactJS /Redux /REST_API /I18next /RazorPay /Material_UI /HTML /CSS /Bootstrap /Git</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 Sep - 2022 Dec"
          iconStyle={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', color: '#fff' }}
          icon={<Briefcase size={16} />}
          contentStyle={{ background: 'rgba(17, 24, 39, 0.92)', border: '1px solid rgba(148, 163, 184, 0.2)', boxShadow: '0 20px 45px rgba(2, 8, 23, 0.32)' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.92)' }}
        >
          <h4 className="vertical-timeline-element-title">MERN Stack Intern</h4>
          <h3 className="vertical-timeline-element-title">Futura Labs</h3>
          <p className="vertical-timeline-element-subtitle">Calicut</p>
          <div className="timeline-tags">/ReactJS /REST_API /Material_UI /HTML /CSS /Bootstrap /NodeJs /Express /MongoDb /Git</div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
