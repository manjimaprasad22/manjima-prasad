import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import ktu from '../assets/images/ktu.jpg'
import kerala from '../assets/images/kerala.jpg'
import cbse from '../assets/images/cbse.jpg'

const Education = () => {
    const theme = useTheme();
    return (
        <div className='row'>
           
          
            <div className='education col-sm-12 col-md-6 col-lg-4'>
                <div className="education-card d-block ">
                    <div className="d-flex">
                    <img src={ktu} className="education-logo" />
                    <div className="education-details col-10">
                        <p className="university-name">BTech - Information Technology</p>
                    </div>
                    </div>

                    <div className="col-12">
                        <div className="d-flex">

                    <p className="course-name">Government Engineering College Idukki</p>
                        <a href='https://www.cloudskillsboost.google/public_profiles/f453072c-0d0c-48a0-8c8b-7c68b4045dc3' target='_blank' style={{marginTop: "9px"}}>Badges <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <p className="education-year">2018-2022</p>
                        <p className="education-score">CGPA: 6.7</p>
                    </div>
                </div>

            </div>
            <div className='education col-sm-12 col-md-6 col-lg-4'>
                <div className="education-card d-block ">
                    <div className="d-flex">
                    <img src={kerala} className="education-logo" />
                    <div className="education-details col-10">
                        <p className="university-name">Higher Secondary</p>
                      
                    </div>
                    </div>

                    <div className="col-12">
                    <p className="course-name">Kunhali Marakkar HSS Kottakkal</p>
                        <p className="education-year">2018</p>
                        <p className="education-score">Percentage: 84%</p>
                    </div>
                </div>

            </div>
            <div className='education col-sm-12 col-md-6 col-lg-4'>
                <div className="education-card d-block ">
                    <div className="d-flex">
                        <img src={cbse} className="education-logo" />
                        <div className="education-details col-10">
                            <p className="university-name">10th Grade</p>

                        </div>
                    </div>

                    <div className="col-12">
                        <p className="course-name">Vidyaniketan Public School Payyoli</p>
                        <p className="education-year">2016</p>
                        <p className="education-score">CGPA: 9.8</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education
