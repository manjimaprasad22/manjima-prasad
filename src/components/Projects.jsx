import React, { useEffect, useState } from 'react'
import trip from '../assets/images/tripsman.png'
import ayush from '../assets/images/ayush.png'
import zq from '../assets/images/zq.png'
import rent from '../assets/images/rent.png'
import crm from '../assets/images/crm.jpeg'
import t2 from '../assets/images/t2.jpeg'
import t3 from '../assets/images/t3.jpeg'
import t4 from '../assets/images/t4.jpeg'
import t5 from '../assets/images/t5.jpeg'
import '../assets/style.css'
import { ReactComponent as More } from '../assets/images/more.svg';
import HTMLFlipBook from 'react-pageflip'

const Projects = () => {
 
  
 
  
  return (
    <div >
      <div className='row content-3'>

        <div className="col-lg-12">
          <h3>Tripsman</h3>
          <div>
            <ul>
              <li>Handled 6 modules and implemented new features and played a crucial role in bug fixing </li>
              <li>Implemented a dashboard application for data visualization using React.js, providing users with real-time insights through interactive charts and graphs</li>
              <li>Implemented Localization using i18next</li>
            </ul>

          </div>
          {/* <button className='btn' data-toggle="modal" data-target="#exampleModal">More images<More style={{height:'20px', width:'20px', color:'blue'}}/></button> */}
        </div>
        <HTMLFlipBook width={500} height={300} className='d-none d-lg-block'>
          <div><img src={trip} alt="" style={{ width: "100%", height: '100%' }} /></div>
          <div >
            <div className='moreimages'>More images

              <More style={{ height: '20px', width: '20px', color: 'blue', marginLeft: '5px' }} />
            </div>
          </div>
          <div><img src={t3} alt="" style={{ width: "100%", height: '100%' }}  /></div>
          <div><img src={t5} alt="" style={{ width: "100%", height: '100%' }}  /></div>
          <div><img src={t4} alt="" style={{ width: "100%", height: '100%' }}  /></div>
          <div><img src={t2} alt="" style={{ width: "100%", height: '100%' }}  /></div>



        </HTMLFlipBook>
        <img src={trip} alt="Zimple-Q" className='img-fluid project-image d-lg-none' />

      </div>
      <div className='container mt-4'>
        <div className='row content-3 mb-4'>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3>Ayushman</h3>
            <ul>
              <li>Implemented state management using Redux</li>
              <li>Perform unit testing, ensure quality assurance of applications through system testing.</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src={ayush} alt="Ayushman" className='img-fluid project-image' />
          </div>
        </div>

        <div className='row content-3 mb-4'>
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <h3>Zimple-Q</h3>
            <ul>
              <li>Converted an existing project from Vue.js</li>
              <li>Write high quality code following MVC architecture</li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <img src={zq} alt="Zimple-Q" className='img-fluid project-image' />
          </div>
        </div>

        <div className='row content-3 mb-4'>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3>CRM</h3>
            <ul>
              <li>Collaborated with UX/UI designers to create a visually appealing and user-friendly interface.</li>
              <li>Organized and wrote modular, well-structured code</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src={crm} alt="CRM" className='img-fluid project-image' />
          </div>
        </div>

        <div className='row content-3 mb-4'>
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <h3>Hex-Rentals</h3>
            <ul>
              <li>Developed a responsive interface, Implemented React packages for pleasant view</li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <img src={rent} alt="Hex-Rentals" className='img-fluid project-image' />
          </div>
        </div>
        {/* <div >
  <div className='moreimages'>More images

  <More style={{ height: '20px', width: '20px', color: 'blue', marginLeft: '5px' }} />
  </div>
</div> */}
      </div>



    </div>
  )
}

export default Projects
