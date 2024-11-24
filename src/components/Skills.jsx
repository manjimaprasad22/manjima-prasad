import React from 'react'
import rest from '../assets/images/slider/rest-api-icon.webp'
import react from '../assets/images/slider/react.png'
import mui from '../assets/images/slider/mui.png'
import redux from '../assets/images/slider/redux.png'
import db from '../assets/images/slider/db.png'
import html from '../assets/images/slider/html.png'
import css from '../assets/images/slider/css.png'
import node from '../assets/images/slider/node.png'
import git from '../assets/images/slider/git.png'
import express from '../assets/images/slider/express.png'
import bootstrap from '../assets/images/slider/bootstrap.png'
import firebase from '../assets/images/slider/firebase.png'
import vite from '../assets/images/slider/vite.svg'
import analytics from '../assets/images/slider/analytics.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/style.css'
const Skills = () => {
    var settings = {
        // dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };
  return (
    <div>
      <Slider {...settings}>
      {[react, redux, rest, git, html, css, bootstrap, mui, node, db, express, firebase, vite, analytics].map((src, index) => (
        <div className="d-flex justify-content-center" key={index}>
          <div className="card" style={{ width: "8rem", backgroundColor: "transparent", border: "none" }}>
            <img className="card-img-top" src={src} alt="Card image cap" style={{ margin: "0 auto" }} />
            <div className="card-body">
              <h5 className="card-title card-name" style={{ color: "black", fontSize: "small" }}>
                {/* Adjust titles based on the images */}
                {['React Js', 'Redux', 'Rest API', 'GitHub', 'HTML', 'CSS', 'Bootstrap', 'MUI', 'Node Js', 'MongoDB', 'Express', 'Firebase', 'Vite', 'Google Analytics'][index]}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </Slider>

    </div>
  )
}

export default Skills
